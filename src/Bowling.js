function Game() {
  this.score = 0;
}

Game.prototype.frame1 = function (bowl1, bowl2) {
  frame1 = bowl1 + bowl2;
  this.score += frame1;
};

Game.prototype.frame2 = function (bowl3, bowl4) {
  frame2 = bowl3 + bowl4;
  this.score += frame2;
};
