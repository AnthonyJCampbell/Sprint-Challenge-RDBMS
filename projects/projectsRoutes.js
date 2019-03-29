const express = require('express');
const projectsDB = require('./../data/helpers/projectsDB')
const db = require('./../data/dbConfig');
const knex = require('knex')


const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  projectsDB.getProjects()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('projects')
  .where('project_id', '=', id)
  .then(project => {
        if (project.length === 0) {
            res.status(401).json({ 
              message: 'The project with the specified ID does not exist.' 
            });
            return;
        }

        db('actions')
          .where('project_id', '=', id)
          .then(actions => {
              project[0].actions = actions;
              res.status(200).json(project);
          })
      //   res.status(200).json(project);
          .catch(err => {
              console.error('error', err);
              res.status(500).json({ error: 'The project information could not be retrieved.'});
          })
    })
    .catch(err => {
        console.error('error', err);
        res.status(500).json({ error: 'The project information could not be retrieved.'})
  })
});

// Currently returns id of newly-made project
router.post('/', (req, res) => {
  const { project_name, project_desc } = req.body
  if (!project_name || !project_desc) {
    res.status(404).json({
      message: "Make sure you pass a project_name and project_desc!"
    })
  } else {
    projectsDB.insertProject(req.body)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
})

module.exports = router;