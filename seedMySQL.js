var mysql = require('mysql2');
var drop = 'TRUNCATE TABLE lang;'
var seedQuery = 'INSERT INTO lang (title, nick, avatar, about) VALUES ("Python", "python", "/images/python.jpg", "Python — это высокоуровневый язык программирования, отличающийся эффективностью, простотой и универсальностью использования. Он широко применяется в разработке веб-приложений и прикладного программного обеспечения, а также в машинном обучении и обработке больших данных."), ("Java Script", "javascript", "/images/javascript.png", "JavaScript – это язык программирования, который добавляет интерактивность на ваш веб-сайт (например: игры, отклик при нажатии кнопок или при вводе данных в формы, динамические стили, анимация)."), ("PHP", "php", "/images/php.jpg", "PHP (рекурсивный акроним словосочетания PHP: Hypertext Preprocessor ) - это распространённый язык программирования общего назначения с открытым исходным кодом. PHP специально сконструирован для веб-разработок и его код может внедряться непосредственно в HTML.")';
var connection = mysql.createConnection({
    host : '127.0.0.1',
    port: '3306',
    user : 'root',
    password : 'Eridan',
    database: 'langs'
});
connection.connect()

console.log("Running SQL seed...")

// Drop content
connection.query(drop, err => {
    if (err) {
        throw err
}

// Seed content
connection.query( seedQuery, err => {
    if (err) {
        throw err
    }
    console.log("SQL seed completed!")
    connection.end()
})
})