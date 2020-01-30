module.exports = function Basket(inBasket) {
  this.items = inBasket.items;
  this.totalItems = inBasket.totalItems;
  this.subtotal = inBasket.subtotal;
  this.discounts = [];
  this.discountAmt = inBasket.discountAmt;
  this.basketTotal = inBasket.basketTotal;
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
    this.basketTotal += basketItem.price;
  };

  this.getItems = function() {
    var basket = [];
    for (var id in this.items) {
      basket.push(this.items[id]);
    };
    return basket;
  };
};
