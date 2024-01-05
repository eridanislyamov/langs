var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Страница Python */
router.get('/python', function(req, res, next) {
  res.send('<h1>Python<h1>');
});

/* Страница JS */
router.get('/javascript', function(req, res, next) {
  res.send('<h1>Java Script<h1>');
});

/* Страница PHP */
router.get('/php', function(req, res, next) {
  res.send('<h1>PHP<h1>');
});

module.exports = router;