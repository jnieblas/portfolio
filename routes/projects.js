var express = require('express');
var router = express.Router();

var projects_controller = require('../controllers/projectsController');

/* GET projects page. */
router.get('/projects', projects_controller.index);

module.exports = router;
