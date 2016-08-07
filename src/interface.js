$(document).ready(function() {
  var game = new Bowling();
  var pins = 0
  totalScore();
  game.ballScore();
  $(function(){
      $("#submit").click(function(){
        pins = parseInt($('input[name=pins]:checked').val());
        console.log(pins);
        game.ballScore(pins);
        totalScore();
        // console.log(game.totalScore());
      });
  });

  function totalScore() {
    $('#totalScore').text(game.totalScore());
  }
});
