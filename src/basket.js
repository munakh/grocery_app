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
    if (basketItem.item.id == 4) {
      var discount = basketItem.item.price * 0.1;
      var newprice = basketItem.item.price - discount;
      basketItem.quantity++;
      basketItem.price = newprice * basketItem.quantity;
      this.subtotal = basketItem.item.price * basketItem.quantity;
      this.totalItems++;
      this.basketTotal += newprice;
      this.discounts.push(basketItem.item.discounts);
      this.discountAmt = this.subtotal = this.basketTotal;
    } else {
      basketItem.quantity++;
      basketItem.price = basketItem.item.price * basketItem.quantity;
      this.totalItems++;
      this.basketTotal += basketItem.price;
      this.subtotal = basketItem.item.price * basketItem.quantity;
      this.discounts.push(basketItem.item.discounts);
      this.discountAmt = 0;
    }
  };

  this.getItems = function() {
    var basket = [];
    for (var id in this.items) {
      basket.push(this.items[id]);
    };
    return basket;
  };
};
