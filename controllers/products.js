const express = require('express');
const router = express.Router();
const products = require('../models/products');

router.post('/', (req, res, next) => {
  let productName = req.body.productName;

  products.delete(productName).then((response) => {
    console.log(response);
  });

  res.status(200).send('OK');
});

module.exports = router;