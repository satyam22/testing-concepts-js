const thumbWar = require('../thumb-war');
const utils = require('../utils');

test.only('returns winner', () => {
  const originalWinner = utils.getWinner;
  utils.getWinner = jest.fn((p1, p2) => p1);

  const winner = thumbWar('Satyam', 'Shivam');
  expect(winner).toBe('Satyam');
  expect(utils.getWinner.mock.calls).toEqual([
    ['Satyam', 'Shivam'],
    ['Satyam', 'Shivam'],
  ]);
  expect(utils.getWinner).toHaveBeenCalledTimes(2);
  expect(utils.getWinner).toHaveBeenNthCalledWith(1, 'Satyam', 'Shivam');
  expect(utils.getWinner).toHaveBeenNthCalledWith(2, 'Satyam', 'Shivam');

  // cleanup
  utils.getWinner = originalWinner;
});
