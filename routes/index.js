var express = require('express');
var router = express.Router();
var fs = require('fs');

var products = JSON.parse(fs.readFileSync('./data.json', 'utf8'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
  {
    title: "Food Market",
    products: products
  });
});

module.exports = router;
