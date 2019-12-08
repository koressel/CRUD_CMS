const express = require('express');
const router = express.Router();
// const products = require('../models/createNew');

router.get('/', (req, res, next) => {
  res.render('createnew');
});

module.exports = router;

