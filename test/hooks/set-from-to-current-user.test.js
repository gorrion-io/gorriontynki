const assert = require('assert');
const feathers = require('@feathersjs/feathers');
const setFromToCurrentUser = require('../../src/hooks/set-from-to-current-user');

describe('\'setFromToCurrentUser\' hook', () => {
  let app;

  beforeEach(() => {
    app = feathers();

    app.use('/dummy', {
      async get(id) {
        return { id };
      }
    });

    app.service('dummy').hooks({
      before: setFromToCurrentUser()
    });
  });

  it('runs the hook', async () => {
    const result = await app.service('dummy').get('test');
    
    assert.deepEqual(result, { id: 'test' });
  });
});
