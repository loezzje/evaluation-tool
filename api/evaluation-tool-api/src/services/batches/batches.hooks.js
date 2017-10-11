const { authenticate } = require('feathers-authentication').hooks;
const createBatch = require('../../hooks/create-batch');



module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [
      createBatch()
    ],
    update: [],
    patch: [],
    remove: [authenticate('jwt')]
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
