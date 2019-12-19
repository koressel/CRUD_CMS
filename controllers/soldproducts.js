const express = require('express');
const router = express.Router();
const products = require('../models/products');

router.get('/', (req, res, next) => {
  products.getAllSold()
    .then(_products => {
      res.render('sold', { products: _products });
    })
    .catch(err => {
      res.render('error');
    });
});

module.exports = router;