var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var schema = mongoose.Schema({ name: String })
schema.methods.peculiarity = function(){ 
    console.log(this.get('name') + ' - высокоуровневый язык программирования')
}

var Lang = mongoose.model('Lang', schema);

var language = new Lang({ name: 'Java' });

language.save().then(() => {
    language.peculiarity()
})