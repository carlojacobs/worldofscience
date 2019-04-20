// Articles.js
// Carlo Jacobs

const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

var Article = mongoose.model('article')

// Get article by ID
router.get('/article/:id', (req, res, next) => {
  console.log("HELLO")
  var id = req.params.id;
  Article.findById(id, (err, article) => {
    if (err) {
      res.send(err);
      res.end();
    }
    if (article) {
      res.send(article);
      res.end()
    }
  });
});

router.get('/front', (req, res, next) => {
  Article.find({frontpage: true}, (err, articles) => {
    if (err) {
      res.send(err);
      res.end();
    }
    if (articles) {
      res.send(articles);
      res.end()
    }
  });
});

// Get all articles
router.get('/all', (req, res, next) => {
  Article.find((err, articles) => {
    res.send(articles);
    res.end();
  });
});

// Create new article
router.post('/create', (req, res, next) => {
  const password = "WOS";
  const passwordCandidate = req.body.password;
  if (password !== passwordCandidate) {
    res.send("Unauthorized");
    res.end();
  }
  var article = req.body.article;
  const newArticle = Article({
    title: article.title,
    subtitle: article.subtitle,
    body: article.body,
    author: article.author,
    imageUrl: article.imageUrl,
    frontpage: article.frontpage,
    date: article.date
  });
  newArticle.save().then(() => {
    res.send(newArticle);
  });
});

module.exports = router;
