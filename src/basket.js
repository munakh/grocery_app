module.exports = function Basket(inBasket) {
  this.items = inBasket.items;
  this.totalItems = inBasket.totalItems;
  this.subtotal = inBasket.subtotal;
  this.discounts = [];
  this.discountAmt = inBasket.discountAmt;
  this.total = inBasket.total;
  this.currency = "USD"
};
