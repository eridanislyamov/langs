var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* Страница Python */
router.get('/python', function(req, res, next) {
  res.render('lang', {
    title: 'Python',
    picture: 'images/python.jpg',
    desc: 'Python — это высокоуровневый язык программирования, отличающийся эффективностью, простотой и универсальностью использования. Он широко применяется в разработке веб-приложений и прикладного программного обеспечения, а также в машинном обучении и обработке больших данных.',
  });
});

/* Страница JS */
router.get('/javascript', function(req, res, next) {
  res.render('lang', {
    title: 'Java Script',
    picture: 'images/javascript.png',
    desc: 'JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация).',
  });
});

/* Страница PHP */
router.get('/php', function(req, res, next) {
  res.render('lang', {
    title: 'PHP',
    picture: 'images/php.jpg',
    desc: 'PHP (рекурсивный акроним словосочетания PHP: Hypertext Preprocessor ) - это распространённый язык программирования общего назначения с открытым исходным кодом. PHP специально сконструирован для веб-разработок и его код может внедряться непосредственно в HTML.',
  });
});

module.exports = router;