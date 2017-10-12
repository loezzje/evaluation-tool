const commonHooks = require('feathers-hooks-common');
const { authenticate } = require('feathers-authentication').hooks;

// const { hashPassword } = require('feathers-authentication-local').hooks;
// const { restrictToAuthenticated } = require('feathers-authentication-hooks');
//



module.exports = {
  before: {
    all: [],
    find: [ ],
    get: [authenticate('jwt') ],
    create: [ ],
    update: [  ],
    patch: [ ],
    remove: []
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider, // don't do this for internal service calls
        commonHooks.discard('password')
      ),
      commonHooks.unless(
        hook => (hook.params.user &&
          hook.params.user._id === hook.data._id), // don't show emails to other users
        commonHooks.discard('email')
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
