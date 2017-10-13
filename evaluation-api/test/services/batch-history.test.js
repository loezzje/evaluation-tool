const assert = require('assert');
const app = require('../../src/app');

describe('\'batch-history\' service', () => {
  it('registered the service', () => {
    const service = app.service('batch-history');

    assert.ok(service, 'Registered the service');
  });
});
