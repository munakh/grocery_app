module.exports = function Basket(items) {
  this.items = items.items;
  this.totalItems = items.totalItems;
  this.subtotal = items.subtotal;
  this.discounts = [];
  this.discountAmt = items.discountAmt;
  this.total = items.total;
  this.currency = "USD"
};
