var express = require('express');
var router = express.Router();
var db = require('../mySQLConnect.js');
// var Lang = require("../models/lang").Lang;
var async = require("async");
// var checkAuth = require("./../middleware/checkAuth.js")


router.get("/:nick", function(req, res, next) {
    db.query(`SELECT * FROM lang WHERE lang.nick = '${req.params.nick}'`, (err,lang) => {
        if (err) {
            console.log(err);
            if(err) return next(err)
        } else {
            if (lang.length == 0) return next(new Error("Нет такого языка программирования"))
            var language = lang[0];
            res.render('lang', {
                title: language.title,
                picture: language.avatar,
                desc: language.about
            })
        }
    })
});



/* Код работы с MongoDB

// GET users listing. 
router.get('/', (req, res, next) => {
    res.send('Новый маршрутизатор, для маршрутов, начинающихся с langs');
});


// Меню + заполение страниц
router.get('/:nick', checkAuth, async function(req, res, next) {
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

*/

module.exports = router;