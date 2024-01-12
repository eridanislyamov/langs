var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');

//var Lang = require("./../models/lang").Lang;
//var User = require("./../models/user").User;

// GET login/registration page.
router.get('/logreg', function(req, res, next) {
  res.render('logreg', {
    title: "Вход",
    error: null
  });
});

// GET home page.
router.get('/', async (req, res, next) => {
  try {
    req.session.greeting = "Hi!!!";
    res.render('index', {
      title: 'Lang',
      counter: req.session.counter,
      user: req.session.user
    });
  } catch (err) {
    next(err);
  }
});

// POST login/registration page.

router.post('/logreg', async function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  db.query(`SELECT * FROM user WHERE user.username = '${req.body.username}'`, function(err, users) {
    if (err) return next(err);

    if (users.length > 0) {
      var user = users[0];

      if (password == user.password) {
        req.session.user = user.id;
        res.redirect('/');
      } else {
        res.render('logreg', { title: 'Вход', error: 'Неверный пароль' });
      }
    } else {
      db.query(`INSERT INTO user (username, password) VALUES ('${username}', '${password}')`, function(err, user) {
        if (err) return next(err);

        req.session.user = user.id;
        res.redirect('/');
      });
    }
  });
});

// POST logout.
router.post('/logout', function(req, res, next) {
  req.session.destroy()
  res.locals.user = null
  res.redirect('/')
});

module.exports = router;