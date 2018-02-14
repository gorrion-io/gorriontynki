const { setNow, alterItems } = require('feathers-hooks-common')
const { authenticate } = require('@feathersjs/authentication').hooks

const removeFrom = alterItems(card => delete card.from)

const setFromToCurrentUser = require('../../hooks/set-from-to-current-user')

module.exports = {
  before: {
    all: [authenticate('jwt')],
    find: [],
    get: [],
    create: [setNow('createdAt'), setFromToCurrentUser()],
    update: [setFromToCurrentUser()],
    patch: [setFromToCurrentUser()],
    remove: []
  },

  after: {
    all: [],
    find: [removeFrom],
    get: [removeFrom],
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
