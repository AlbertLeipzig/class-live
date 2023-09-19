import booksData from '../data/books-data.json' assert { type: 'json' };

// map      => gibt ein Array zurück
// forEach  => führt ein Action aus der Data

//  alle Authoren von booksData auf den Terminal drucken lassen

const authorsList = booksData.map((book) => book.author);

const cheapBooks = booksData.filter(book => book.price < 20)

console.log(cheapBooks);

/* console.log(authorsList); */

/* booksData.forEach((book) => console.log(book.author)); */

/* for (const book of booksData) {
  if (book.author === 'Stacy Gapp') {
    break;
  }
  console.log(book.author);
} */