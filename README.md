<h1> Grocery App </h1>

### Cover Letter

#### Why I'm good for this role

I went to the lunchtime talk that the S put on a few weeks ago to advertise this position and was really fascinated with how much had been achieved with a fairly small team. From what I heard at the talk, this is why I think I'm really well suited to this role:
- I understand that this role will expose me to a lot of new tech that I may not have been exposed to previously. But rather than intimidate me, this excites me and I am very, very keen to jump into a challenging role. I feel confident enough in my skills developed at Makers to be able to take on a substantial learning curve. For instance, every *single* element of this tech test's tech stack was new to me, and I'm really glad to say that I achieved a functioning grocery app in the better part of one day.
- I have previous experience working in a political environment. My past work was in media and has often taken me to Westminster where I have presented my work in the House of Commons on more than one occasion. Therefore, I'm well acquainted with the professional environment that the S operates in, which I understand is very different from most tech companies.
- I am an excellent team player, I listen, but am also full of ideas. I understand that since the current team is fairly small, the role requires someone who will work well within the existing framework but also carry a high level of responsibility when it comes to shaping the future of the product. I believe I can deliver on both these fronts.

#### Thoughts on the tech test

- Every single element of the tech stack was new to me! So I'm really proud of what I've been able to create in the better part of a day. From learning Node.js, to Express, hbs, and implementing the CurrencyLayer API, it's been a steep learning curve, but one that I've really enjoyed (once it started to click!). It's shown me just how much I can take on and process in a short amount of time, and while it may not be perfect, the { "time" : ["knowledge acquired"] } ratio has been personally amazing to see.
- The most unfortunate part of this tech test has been the block between the code and testing. I *know* how to write tests. If Makers has taught me anything, it's writing tests! Hence why this is even more frustrating. I know I'm only missing one single link between my src and spec files, but I've tried so many different combinations and none have allowed my tests to access the code within the 'module.exports' in 'src/basket.js'. Eventually I had to stop trying and move on, however, while I may be submitting this test for now, I'm not giving up and will ensure this app is fully tested in the next few days. I know this was a critical element for this tech test, and it's unfortunate that this was the thing I got stuck on.

<i> For my complete CV please [click here](https://github.com/munakh/CV/blob/master/MunaKhanCV.md) </i>

### Tech stack:
Node.js, Express, Express-Session, Express handlebars (hbs), CurrencyLayer API, JSON, Nodemon

### To do with more time:
- TESTS!!
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
