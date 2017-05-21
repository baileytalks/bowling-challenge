function Game() {
  this.score  = 0;
  this.frames = [];
}

Game.prototype.frame = function(a, b) {
  if (a > 10) { return 'error' };
  if (b > 10) { return 'error' };

  frameScore = a + b;
  this.frames.push(frameScore);
  this.score += frameScore;

  if (this.frames.length === 11) { return 'no more frames, end of game' };
};
