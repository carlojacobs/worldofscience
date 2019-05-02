// Mongoose.js
// Carlo Jacobs
// 5-04-2019

const mongoose = require('mongoose');

const dbUrl = 'mongodb://188.166.0.103:27017/worldofscience';
mongoose.connect(dbUrl, {
	auth: { authSource: "admin" },
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
