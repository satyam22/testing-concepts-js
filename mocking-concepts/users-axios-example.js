const Users = require('./users-axios');

Users.all()
  .then((users) => {
    console.log('users');
    console.log(users);
  })
  .catch((error) => {
    console.error(error);
  });
