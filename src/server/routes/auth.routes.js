const express = require('express');
const userController = require('../controllers/auth.controllers');

const router = express.Router();

router.post('/register', userController.registerPost);

module.exports = router;