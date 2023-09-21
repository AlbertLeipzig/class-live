// reduce

const prices = [1, -2, 3, 4, 5];

// [1, 2, 3, 4, 5]

// acc : 1
// curr : 2
// [1, 2, 3, 4, 5]

// acc : 3
// curr : 3
// [3, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]
// [1, 2, 3, 4, 5]

const totalAmount = prices.reduce(
  (accumulator, current) => accumulator + current,
  0
);

/* console.log(totalAmount); */

const orders = [
  {
    price: 10,
  },
  {
    price: 14,
  },
  {
    price: 34,
  },
  {
    price: 6,
  },
  {
    price: 1,
  },
];

const totalPrice = orders.reduce((prev, acc) => prev + acc.price, 0);

const averagePrice =orders.reduce((prev, acc) => prev + acc.price, 0) / orders.length;

// cheaperOrder

const cheapestOrder = orders.reduce((minPrice, currBook) => minPrice < currBook.price ? currBook.price : minPrice)



