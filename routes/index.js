var express = require('express');
var router = express.Router();
var Lang = require("../models/lang").Lang;

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Lang.find({}, { _id: 0, title: 1, nick: 1 });
    console.log(menu);
    res.cookie('greeting', 'Hi!!!').render('index', { 
      title:'Lang', 
      menu: menu 
    });
    res.render('index', {
      title: 'Lang',
      menu: menu
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;