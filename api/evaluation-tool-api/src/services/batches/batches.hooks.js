// const { authenticate } = require('feathers-authentication').hooks;
// const { restrictToAuthenticated } = require('feathers-authentication-hooks');
// const createBatch = require('../../hooks/create-batch');
//
// const restrict = [
//   authenticate('jwt'),
//   restrictToAuthenticated(),
// ];

module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
