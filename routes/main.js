const express = require('express');
const taskController = require('../controllers/mainController');
const router = express.Router();

router.get('/', taskController.getMainPage)

module.exports = router;