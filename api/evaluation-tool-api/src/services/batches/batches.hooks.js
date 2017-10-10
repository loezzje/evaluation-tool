// const { authenticate } = require('feathers-authentication').hooks;
// const {  restrictToAuthenticated } = require('feathers-authentication-hooks');



module.exports = {
  before: {
    // all: [authenticate('jwt'), restrictToAuthenticated()],
    find: [],
    get: [],
    create: [],
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
