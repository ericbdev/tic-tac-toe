describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000');
  });

  it('should find a game', async () => {
    const Game = await page.$$('.js-game');
    await expect(Game.length).toBeTruthy();
  });
});
