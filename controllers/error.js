const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('hit')
  res.render('error');
});

module.exports = router;