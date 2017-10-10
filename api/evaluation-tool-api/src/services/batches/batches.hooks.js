const { authenticate } = require('feathers-authentication').hooks;
const { associateCurrentUser, restrictToAuthenticated } = require('feathers-authentication-hooks');



module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'),
      restrictToAuthenticated(), associateCurrentUser() ],
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
