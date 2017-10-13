// Initializes the `batch-history` service on path `/batch-history`
const createService = require('feathers-mongoose');
const createModel = require('../../models/batch-history.model');
const hooks = require('./batch-history.hooks');
const filters = require('./batch-history.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'batch-history',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/batch-history', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('batch-history');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
