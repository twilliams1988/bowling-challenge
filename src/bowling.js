function Bowling() {
  this.totalScore = 0;
  this.frame = []
  this.game = []
}

Bowling.prototype = {

  totalScore: function() {
    return 0
  },
  strikeCheck: function(ball) {
    if(this.game[-2] === [10]) {
      this.game[-2] += (this.game[-1] + ball);
    }
  },
  ballScore: function(ball) {
    this.frame.push(ball);
    if(ball === 10) {
      this.game.push(this.frame);
      this.frame = [];
    }else if(this.frame.length === 2) {
      this.game.push(this.frame);
      this.frame = [];
    }
    strikeCheck(ball);
  },
  game: function() {
    return this.game;
  }
};
