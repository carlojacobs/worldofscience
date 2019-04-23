// Mongoose.js
// Carlo Jacobs
// 5-04-2019

const mongoose = require('mongoose');

// Creating a mongoose conection
/*mongoose.connect('mongodb://carlo:Dittoenbram1234@carlo-shard-00-00-nwaxe.mongodb.net:27017,carlo-shard-00-01-nwaxe.mongodb.net:27017,carlo-shard-00-02-nwaxe.mongodb.net:27017/worldofscience?ssl=true&replicaSet=carlo-shard-0&authSource=admin', {
  useNewUrlParser: true
});*/

const dbUrl = 'mongodb://localhost:27017/worldofscience';
mongoose.connect(dbUrl, {
	user: 'carlo',
  pass: 'Dittoenbram1234',
	useNewUrlParser: true
});

var articleSchema = new mongoose.Schema({
  title: String,
  subtitle: String,
  body: String,
  imageUrl: String,
  author: String,
  frontpage: Boolean,
  date: String,
  tags: [String]
});

mongoose.model('article', articleSchema);
