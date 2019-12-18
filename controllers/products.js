const express = require('express');
const router = express.Router();
const products = require('../models/products');

router.get('/', (req, res, next) => {
  products.getAll()
    .then(_products => {
      res.render('products', { products: _products });
    })
    .catch(err => {
      res.render('error');
    });
});

router.get('/new', (req, res, next) => {
  res.render('new')
  // products.getAll()
  //   .then(_products => {
  //     res.render('products', { products: _products });
  //   })
  //   .catch(err => {
  //     res.render('error');
  //   });
});



// router.post('/', (req, res, next) => {
//   let productName = req.body.productName;

//   products.delete(productName).then((response) => {
//     console.log(response);
//   });

//   res.status(200).send('OK');
// });

module.exports = router;