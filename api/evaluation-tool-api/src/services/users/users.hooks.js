const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { hashPassword } = require('feathers-authentication-local').hooks;
const { restrictToAuthenticated } = require('feathers-authentication-hooks');


const restrict = [
  authenticate('jwt'),
  restrictToAuthenticated(),
];

module.exports = {
  before: {
    all: [],
    find: [ ...restrict],
    get: [ ...restrict ],
    create: [ ...restrict, hashPassword() ],
    update: [ ],
    patch: [ ],
    remove: [ ]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      )
    ],
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
