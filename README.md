<h1> Grocery App </h1>

#### Thoughts on the tech test

- Every single element of the tech stack was new to me! So I'm really proud of what I've been able to create in the better part of a day. From learning Node.js, to Express, hbs, and implementing the CurrencyLayer API, it's been a steep learning curve, but one that I've really enjoyed (once it started to click!). It's shown me just how much I can take on and process in a short amount of time, and while it may not be perfect, the { "time" : ["knowledge acquired"] } ratio has been personally amazing to see.

<i> For my complete CV please [click here](https://github.com/munakh/CV/blob/master/MunaKhanCV.md) </i>

### Tech stack:
Node.js, Express, Express-Session, Express handlebars (hbs), CurrencyLayer API, JSON, Nodemon

### To do with more time:
- Tests
- Currently, offers work fine if only one used. When both added, money amounts get muddled. It is something to do with the way I've used the if/else statement and should be an easy fix that I can't seem to see right now.
- Currently, money amounts all display to 2 decimal places once currency is selected, however they can sometimes be awkwardly long upon landing in basket. Need to find a way to use 'toFixed(2)' all the way through.
- Add users, sign up, sign in functionality
- Add database to store users and items
- Users can save baskets to profile
- Checkout feature working with suitable API
- Styling
- Refactoring

### How to use the app:

Clone this repository:
``` shell
git clone git@github.com:munakh/grocery_app.git
```

Install dependencies:
``` shell
npm install
```

Start server:
``` shell
npm start
```

In your browser, navigate to:
``` shell
http://localhost:3000/
```

To see returning response:
- Add 3 apples to cart
- See terminal for the following data:
``` shell
  Basket {
  items: { '4': { item: [Object], quantity: 3, price: 2.7 } },
  totalItems: 3,
  subtotal: 3,
  discounts: [ [ '10% off' ] ],
  discountAmt: 0.2999999999999998,
  basketTotal: 2.7,
  currency: 'USD',
  add: [Function],
  getItems: [Function]
  }
```
