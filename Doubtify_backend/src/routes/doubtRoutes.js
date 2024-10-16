const express = require('express');
const router = express.Router();
const DoubtController = require('../controllers/DoubtController');

// Define routes
router.post('/doubts', DoubtController.createDoubt);
router.get('/doubts', DoubtController.getAllDoubts);
router.get('/doubts/:id', DoubtController.getDoubtById);
router.put('/doubts/:id', DoubtController.updateDoubt);
router.delete('/doubts/:id', DoubtController.deleteDoubt);

module.exports = router;