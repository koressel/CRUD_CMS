const express = require('express');
const router = express.Router();
const db = require('../models/index');
const products = require('../models/products');
const log = require('../helpers/logger');

router.get('/', (req, res) => {
  res.render('index');
});


module.exports = router;
