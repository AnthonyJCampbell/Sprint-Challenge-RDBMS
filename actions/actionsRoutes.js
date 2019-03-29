const express = require('express');
const actionsDB = require('./../data/helpers/actionsDB')

const router = express.Router();
router.use(express.json());

module.exports = router;