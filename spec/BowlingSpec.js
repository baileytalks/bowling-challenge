describe('Game', function() {

  var game = new Game();

  it('when bowl1 and bowl2 both equal 1, frame1 equals 2', function() {
    game.frame1(1,1);
    expect(game.score).toEqual(2);
  });
});
