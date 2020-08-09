const axios = require('axios');
const Users = require('../users-axios');

jest.mock('axios');

test('should fetch users', () => {
  const users = [
    { id: 10, name: 'Bob' },
    { id: 11, name: 'Ravi' },
  ];
  const resp = { data: users };
  // axios.get.mockResolvedValue(resp);

  axios.get.mockImplementation(() => Promise.resolve(resp));
  return Users.all().then((data) => expect(data).toEqual(users));
});
