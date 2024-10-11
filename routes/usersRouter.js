'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controller/usersController');

router.get('/checkout', controller.checkout);

module.exports = router;
