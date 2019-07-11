const express = require('express');
const router = express.Router();

//Models
const Book = require('../models/Book');

router.get('/new', function(req, res, next) {
  const book = new Book({
    title: 'first register'
  });
  book.save((err, date) =>{
    if(err){
      console.log(err);
    }else {
      res.json(data);
    }
  })
  res.render('index', { title: 'Express' });
});

module.exports = router;
