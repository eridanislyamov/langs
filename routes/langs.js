var express = require('express');
var router = express.Router();
var Lang = require("../models/lang").Lang;
var async = require("async");

/* GET users listing. */
router.get('/', (req, res, next) => {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с langs');
});


/* Меню + заполение страниц */
router.get('/:nick', async function(req, res, next) {
    try {
        const [lang, langs] = await Promise.all([
            Lang.findOne({ nick: req.params.nick }),
            Lang.find({}, { _id: 0, title: 1, nick: 1 })
        ]);
        if (!lang) {
            throw new Error("Нет такого");
        }
        renderCup(res, lang.title, lang.avatar, lang.desc, langs);
    }
    catch (err) {
        next(err);
    }
});

// Страницы языков
function renderCup(res, title, picture, desc, menu) {
    console.log(menu);
    res.render('lang', {
        title: title,
        picture: picture,
        desc: desc,
        menu: menu
    });
}

module.exports = router;