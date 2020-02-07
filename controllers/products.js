const express = require('express');
const router = express.Router();
const products = require('../models/products');

router.get('/', (req, res, next) => {
  products.getAllUnsold()
    .then(_products => {
      res.render('products', { products: _products });
    })
    .catch(err => {
      res.render('error');
    });
});

router.get('/sold', (req, res, next) => {
  products.getAllSold()
    .then(_products => {
      res.render('sold', { products: _products });
    })
    .catch(err => {
      res.render('error');
    });
});

router.post('/create', (req, res) => {
  products.create(req)

    .then(result => {
      res.sendStatus(200);
    })

    .catch(err => {
      console.log(err)
      res.sendStatus(400);
    });
});

router.post('/delete', (req, res) => {
  let productName = req.body.productName;

  products.delete(productName).then((response) => {
    console.log(response);
  });

  res.sendStatus(200);
});

module.exports = router;