const db = require('./../dbConfig');

module.exports = {
  insertAction,
  getActions,
  getAction
}

function insertAction(action) {
  return db('actions')
    .insert(action)
}

function getActions() {
  return db('actions')
}

function getAction(id) {
  return db('actions').where('action_id', '=', id)
}