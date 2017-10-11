// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
const Batch = require('../models/batches.class');

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function createBatch (hook) {
    const batch = new Batch();
    const { name, startsAt, endsAt } = hook.params;

    batch.setup(name, startsAt, endsAt);
    hook.data = batch;

    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
