const express = require('express');
const router = express.Router();
const db = require('../models/index');
const products = require('../models/products');
const blogPosts = require('../models/blog');
const log = require('../helpers/logger');

router.get('/', (req, res) => {
  res.render('index');
  // products.getAll()
  //   .then(_products => {
  //     blogPosts.getAll()
  //       .then(_blogPosts => {
  //         res.render('index', { products: _products, blogPosts: _blogPosts });
  //       })
  //       .catch(err => {
  //         res.render('error');
  //       });
  //   })
  //   .catch(err => {
  //     res.render('error');
  //   });

});


module.exports = router;
