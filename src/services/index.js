const cards = require('./cards/cards.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(cards);
  app.configure(users);
};
