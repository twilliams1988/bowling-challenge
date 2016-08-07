function Bowling() {
  this.frame = []
  this.game = []
}

Bowling.prototype = {

  totalScore: function() {
    return arraySum(this.game)
  },
  ballScore: function(ball) {
    this.frame.push(ball);
    if(ball === 10) {
      this.game.push(this.frame);
      this.frame = [];
    } else if(this.frame.length === 2) {
      this.game.push(this.frame);
      this.strikeCalc();
      this.frame = [];
    }
  },
  game: function() {
    return this.game;
  },
  strikeCalc: function() {
    if(this.game.slice(-2)[0][0] === 10) {
      this.game.slice(-2)[0].push(this.frame.reduce(add, 0));
    }
  }
};

function add(a, b) {
    return a + b;
}
function arraySum(i) {
    var sum=0; // missing var added
    for(var a=0;a<i.length;a++){ // missing var added
        if(typeof i[a]=="number"){
            sum+=i[a];
        }else if(i[a] instanceof Array){
            sum+=arraySum(i[a]);
        }
    }
    return sum;
}
// strikeCalc: function() {
//     return this.game.slice(-2)[0][0] += this.game.slice(-1)[0].reduce(add, 0);
// },
