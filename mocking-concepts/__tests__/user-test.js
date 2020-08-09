jest.mock('../request');

import * as user from '../user';

it('works with promises', () => {
  expect.assertions(1);
  return user.getUserName(1).then((data) => expect(data).toEqual('Nikhil'));
});
