const batches = require('./batches/batches.service.js');
const users = require('./users/users.service.js');
const batchHistory = require('./batch-history/batch-history.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(batches);
  app.configure(users);
  app.configure(batchHistory);
};
