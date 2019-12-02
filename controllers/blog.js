const express = require('express');
const router = express.Router();
const blogPosts = require('../models/blog');

router.post('/', (req, res, next) => {
  let blogPostName = req.body.blogPostName;

  blogPosts.delete(blogPostName).then((response) => {
    console.log(response);
  });

  res.status(200).send('OK');
});

module.exports = router;