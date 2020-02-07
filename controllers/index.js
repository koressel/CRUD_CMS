const express = require('express');
const router = express.Router();
const login = require('../models/login');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/login', (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  login.validateLoginInfo(username, password)
    .then(userId => {
      if (userId !== undefined) {
        res.json(userId);
      }
      else {
        res.sendStatus(404);
      }
    });

});

module.exports = router;
