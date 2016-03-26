var mongoose = require('mongoose');
mongoose.connect('mongodb://nano:1111@localhost:27017/hairbook'); // 기본 설정에 따라 포트가 상이 할 수 있습니다.
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("mongo db connection OK.");
});

var Schema = mongoose.Schema;
 
var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});
 
module.exports = mongoose.model('book', bookSchema);