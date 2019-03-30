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
  // select p.project_name, p.project_desc, a.* from projects as p
  // inner join actions as a on p.project_id = a.project_id
}

function getAction(id) {
  return db('actions').where('action_id', '=', id)
}