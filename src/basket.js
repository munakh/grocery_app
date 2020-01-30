module.exports = function Basket(inBasket) {
  this.items = inBasket.items;
  this.totalItems = inBasket.totalItems;
  this.subtotal = inBasket.subtotal;
  this.discounts = [];
  this.discountAmt = inBasket.discountAmt;
  this.total = inBasket.total;
  this.currency = "USD"

  this.add = function(item, id) {
    var basketItem = this.items[id];
    if (!basketItem) {
      basketItem = this.items[id] = { item: item,
                                      quantity: 0,
                                      price: 0 };
    };
    basketItem.quantity++;
    basketItem.price = basketItem.item.price * basketItem.quantity;
    this.totalItems++;
    this.total += basketItem.price;
  };
};
