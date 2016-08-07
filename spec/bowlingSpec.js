describe('Bowling', function() {
  var bowling;

beforeEach(function() {
  bowling = new Bowling();
});

it('starts the score at 0', function() {
  expect(bowling.totalScore).toEqual(0);
});

it('adds the users balls to an array', function() {
  bowling.ballScore(1)
  expect(bowling.frame[0]).toEqual(1);
});

it('adds the users frame to an array of arrays', function() {
  [1,1,1,1].forEach(function(i) {
  bowling.ballScore(i);
  });
  expect(bowling.game).toEqual([[1,1], [1,1]]);
});
it('automatically registers a strike and prepares for the next frames ball', function() {
  bowling.ballScore(10)
  expect(bowling.game).toEqual([[10]]);
  expect(bowling.frame).toEqual([]);
});
it('adds the next two balls to a strike score', function() {
  bowling.ballScore(10);
  bowling.ballScore(1);
  bowling.ballScore(1);
  expect(bowling.totalScore).toEqual(12);
});

});
