const db = require('./../dbConfig');

module.exports = {
  insertProject,
  getProjects,
  getProject
}

function insertProject(project) {
  return db('projects')
    .insert(project)
}

function getProjects() {
  return db('projects')
}

function getProject(id) {
  return db('projects').where('project_id', '=', id)
}