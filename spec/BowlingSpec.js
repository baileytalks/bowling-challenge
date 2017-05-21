describe('Bowling', function() {

  var game = new Game();
  var newGame = new Game();

  it('no bowls can take down more than 10 pins', function() {
    expect(game.frame(11,11)).toEqual('error');
  });

  it('when bowl1 and bowl2 both equal 1, frame1 equals 2', function() {
    game.frame(1,1);
    expect(game.score).toEqual(2);
  });

  it('when frame2 equals 2, the game score is now 4', function() {
    game.frame(1,1);
    expect(game.score).toEqual(4);
  });

  it('when all frames equal 2, the game score is 20', function() {
    for (x = 0; x < 8; x++) {
      game.frame(1,1);
    };
    expect(game.score).toEqual(20);
  });

  it('a game can only have 10 frames', function() {
    for (x = 0; x < 10; x++) {
      newGame.frame(1,1);
    };
    expect(newGame.frame(1,1)).toEqual('no more frames, end of game');
  });
});
