var express = require('express');
var router = express.Router();
var fs = require('fs');
var Basket = require('../src/basket.js');
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
  var basket = new Basket(req.session.basket ? req.session.basket : {});
  var productId = req.params.id;
  var product = products.filter(function(item) {
    return item.id == productId;
  });
  basket.add(product[0], productId);
  req.session.basket = basket;
  console.log(req.session.basket);
  res.redirect('/');
});

router.get('/basket', function(req, res, next) {
  if (!req.session.basket) {
    return res.render('basket', {
      products : null
    });
  };
  var inBasket = new Basket(req.session.basket);
  res.render('basket', {
    title : 'Your basket',
    products : inBasket.getItems(),
    subtotal : inBasket.subtotal,
    discounts : inBasket.discounts,
    discountAmt : inBasket.discountAmt,
    total : inBasket.total,
    currency : inBasket.currency
  });
});

module.exports = router;
