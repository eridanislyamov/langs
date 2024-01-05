var express = require('express');
var router = express.Router();
var Lang = require("../models/lang").Lang;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Новый маршрутизатор, для маршрутов, начинающихся с langs');
});


/*Страница для языков программирования */
router.get("/:nick", async (req, res, next) => {
    try {
      const lang = await Lang.findOne({ nick: req.params.nick });
      console.log(lang);
      if (!lang) {
        throw new Error("Нет такого!");
      }
      res.render('lang', {
        title: lang.title,
        picture: lang.avatar,
        desc: lang.desc
      });
    } catch (err) {
      next(err);
    }
  });

module.exports = router;