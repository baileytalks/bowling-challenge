function Game() {
  this.score  = 0;
  this.frames = [];
}

Game.prototype.frame = function(first, second) {
  if (first > 10) { return 'not possible' };
  if (second > 10) { return 'not possible' };
  if (this.frames.length >= 10) { return 'no more frames, end of game' };

  if (first === 10) {
    frameScore = first;
    this.frames.push(10);
    return 'STRIKE!';
  }

  else {
    frameScore = first + second;
    this.score += frameScore;
    this.frames.push(frameScore);
  };
};
