const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', function (req, res, next) {
  res.render('index');
});

module.exports = router;
