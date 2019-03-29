const express = require('express');
const projectsDB = require('./../data/helpers/projectsDB')

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
  projectsDB.getProject(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

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