const { authenticate } = require('feathers-authentication').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');


module.exports = {
  before: {
    all: [],
    find: [],
    get: [],
    create: [ authenticate('jwt'),
      restrictToAuthenticated()],
    update: [ authenticate('jwt'),
      restrictToAuthenticated()],
    patch: [ authenticate('jwt'),
      restrictToAuthenticated()],
    remove: [ authenticate('jwt'),
      restrictToAuthenticated()]
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
