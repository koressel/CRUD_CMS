const express = require('express');
const router = express.Router();
const imgur = require('../models/imgur');
const products = require('../models/products');

router.post('/', (req, res, next) => {

  products.create(req)

    .then(result => {
      res.sendStatus(200);
    })
    
    .catch(err => {
      console.log(err)
      res.sendStatus(400);
    });

});

module.exports = router;

