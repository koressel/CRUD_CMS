const express = require('express');
const router = express.Router();
const imgur = require('../models/imgur');
const products = require('../models/products');

router.post('/', (req, res, next) => {

  let data = {};

  let body = req.body;
  data.title = body.title;
  data.dimensions = body.dimensions;
  data.price = body.price;
  data.shipping = body.shipping;
  let productImage = req.files.productImage.data;

  imgur.upload(productImage)
    .then(url => {
      data.image = url;
      products.create(data)
        .then(result => {
          res.sendStatus(200);
        })
        .catch(err => res.sendStatus(400));
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(400);
    });

});

module.exports = router;

