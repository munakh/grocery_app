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

router.get('/add/:id', function(req, res, next) {
  res.redirect('/');
});

router.get('/basket', function(req, res, next) {
  res.render('basket' {
    title : 'Your basket',
    products : 'products',
    subtotal : 'subtotal',
    discounts : 'discounts',
    discountAmt : 'discountAmt',
    total : 'total',
    currency : 'currency'
  });
});

module.exports = router;
