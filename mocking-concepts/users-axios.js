const axios = require('axios');

class Users {
  static all() {
    return axios.get('http://localhost:3000/users').then((resp) => resp.data);
  }
}

module.exports = Users;
