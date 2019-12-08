const express = require('express');
const router = express.Router();
const formidable = require('formidable');
// const products = require('../models/createNew');

router.post('/', (req, res, next) => {

  console.log(req.files);
  console.log(req.body)

  res.sendStatus(200);
});

module.exports = router;

