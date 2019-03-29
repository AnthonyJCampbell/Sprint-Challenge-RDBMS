const express = require('express');
const actionsDB = require('./../data/helpers/actionsDB')

const router = express.Router();
router.use(express.json());

router.get('/', (req, res) => {
  actionsDB.getActions()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

router.get('/:id', (req, res) => {
  const { id } = req.params;
  actionsDB.getAction(id)
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      res.status(500).json(err)
    })
})

// Currently returns id of newly-made action
router.post('/', (req, res) => {
  const { action_desc, project_id } = req.body
  if (!action_desc || !project_id) {
    res.status(404).json({
      message: "Make sure you pass a project_name and project_desc!"
    })
  } else {
    actionsDB.insertAction(req.body)
      .then(data => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(500).json(err)
      })
  }
})

module.exports = router;