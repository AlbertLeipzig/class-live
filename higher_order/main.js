import booksData from '../data/books-data.json' assert { type: 'json' };

// find()
// filter()

const numbers = [1, 2, 3, 4, 5];

const smallNumbers = numbers.filter((number) => number % 2 === 0);

/* console.log(smallNumbers); */

const userNames = ['Anna', 'Berta', 'Cesar', 'Dora', 'Anna', 'Emil', 'Dora'];

const filteredUsers = userNames.find((name) => name === 'Anna');

/* console.log(filteredUsers); */

// books that
// const filteredBooks = booksData.filter((book) => book.price < 30);

const filterBooks = (typeOfSearch, searchValue) => {
  return booksData.filter((book) => book[typeOfSearch] === searchValue);
};

const filteredBooks = filterBooks('author', 'Vickie Iskowicz');

// find book with title "Day They Robbed the Bank of England, The"

const findBook = (typeOfSearch, searchValue) => {
  return booksData.find((book) => book[typeOfSearch] === searchValue);
};

const foundBook = findBook('author', 'Vickie Iskowicz');

/* console.log(filteredBooks); */
console.log(foundBook);
