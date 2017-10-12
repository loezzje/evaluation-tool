const { authenticate } = require('feathers-authentication').hooks;
// const { restrictToAuthenticated } = require('feathers-authentication-hooks');
const createBatch = require('../../hooks/create-batch');


module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [createBatch()],
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
