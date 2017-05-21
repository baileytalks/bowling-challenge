describe('Game', function() {

  var game = new Game();

  it('when bowl1 and bowl2 both equal 1, frame1 equals 2', function() {
    game.frame1(1,1);
    expect(game.score).toEqual(2);
  });

  it('when frame2 equals 2, the game score is now 4', function() {
    game.frame2(1,1);
    expect(game.score).toEqual(4);
  });
});
