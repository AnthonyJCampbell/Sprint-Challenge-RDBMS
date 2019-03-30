const db = require('./../dbConfig');
const knex = require('knex')

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
  db('projects')
      .where('id', '=', id)
      .then(data => {
        console.log('made it')
          if (project.length === 0) {
              res.status(401).json({ message: 'The project with the specified ID does not exist.' });
              return;
          }

          db('actions')
            .where('project_id', '=', id)
            .then(actions => {
                project[0].actions = actions;
                res.status(200).json(project);
            })
      })
  // return db('projects').where('project_id', '=', id)
}