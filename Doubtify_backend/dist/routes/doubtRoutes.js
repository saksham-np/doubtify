"use strict";

var express = require('express');
var router = express.Router();
var DoubtController = require('../controllers/DoubtController');

// Define routes
router.post('/doubts', DoubtController.createDoubt);
router.get('/doubts', DoubtController.getAllDoubts);
router.get('/doubts/:id', DoubtController.getDoubtById);
router.put('/doubts/:id', DoubtController.updateDoubt);
router["delete"]('/doubts/:id', DoubtController.deleteDoubt);
module.exports = router;