function Game() {
  this.score = 0;
}

Game.prototype.frame1 = function (bowl1, bowl2) {
  frame1 = bowl1 + bowl2;
  this.score += frame1;
};
