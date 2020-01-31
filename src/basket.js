module.exports = function Basket(inBasket) {
  this.items = inBasket.items || {};
  this.totalItems = inBasket.totalItems || 0;
  this.subtotal = inBasket.subtotal || 0;
  this.discounts = [];
  this.discountAmt = inBasket.discountAmt || 0;
  this.basketTotal = inBasket.basketTotal || 0;
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
      this.discountAmt = this.subtotal - this.basketTotal;
    } else if (basketItem.item.id == 3 && basketItem.quantity >=2) {
      var coupon = 0.5
        var fullprice = basketItem.item.price
        var offerprice = fullprice - coupon
        basketItem.quantity++;
        basketItem.price += offerprice;
        this.subtotal = basketItem.item.price * basketItem.quantity;
        this.totalItems++;
        this.basketTotal += offerprice;
        this.discounts.push(basketItem.item.discounts)
        this.discountAmt = this.subtotal - this.basketTotal
    } else {
      basketItem.quantity++;
      basketItem.price = basketItem.item.price * basketItem.quantity;
      this.totalItems++;
      this.basketTotal += basketItem.item.price;
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
