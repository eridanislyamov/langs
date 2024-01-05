var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var Lang = mongoose.model('Lang', { name: String });

var language = new Lang({ name: 'Java' });
language.save().then(() => console.log('- высокоуровневый язык программирования'));