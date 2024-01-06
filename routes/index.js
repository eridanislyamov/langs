var express = require('express');
var router = express.Router();
var Lang = require("./../models/lang").Lang;
var User = require("./../models/user").User;

/* GET login/registration page. */
router.get('/logreg', function(req, res, next) {
  res.render('logreg', {
    title: "Вход"
  });
});

/* GET home page. */
router.get('/', async (req, res, next) => {
  try {
    const menu = await Lang.find({}, { _id: 0, title: 1, nick: 1 });
    console.log(menu);
    req.session.greeting = "Hi!!!";
    res.render('index', {
      title: 'Lang',
      menu: menu,
      counter: req.session.counter
    });
  } catch (err) {
    next(err);
  }
});

/* POST login/registration page. */

router.post('/logreg', async function(req, res, next) {
  var username = req.body.username;
  var password = req.body.password;
  try {
    var user = await User.findOne({ username });
    if (user) {
      if (user.checkPassword(password)) {
        req.session.user = user._id;
        res.redirect('/');
      } else {
        res.render('logreg', { title: 'Вход', error: 'Неверный пароль' });
      }
    } else {
      const newUser = new User({ username, password });
      await newUser.save();
      req.session.user = newUser._id;
      res.redirect('/');
    }
} catch (err) {
    next(err);
}
});

module.exports = router;