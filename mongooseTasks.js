var mongoose = require('mongoose') 
mongoose.connect('mongodb://localhost/test1') 

var Lang = require("./models/lang").Lang

var schema = mongoose.Schema({name: String})

var lang = new Lang({
      title: "Pascal",
      nick: "pascal"
})

lang.save().then(() => {
      console.log(lang.title)
})