const express = require('express');
const projectsDB = require('./../data/helpers/projectsDB')

const router = express.Router();
router.use(express.json());

module.exports = router;