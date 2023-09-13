import booksData from '../data/books-data.json' assert { type: 'json' };
import usersData from '../data/users-data.json' assert { type: 'json' };

// print all register

function printAllData(array) {
  console.log(array);
}

// map ein array durch ein parameter

const mapRegisters = (array, parameter) => {
  return array.map((entry) => entry[parameter]);
};

// find register

const findRegister = (array, param, searchValue) => {
  return array.find((entry) => searchValue === entry[param]);
};

// filter register

const filterRegister = (array, searchValue, parameter) => {
  return array.filter((register) => register[parameter] === searchValue);
};

/* const result1 = filterRegister(booksData, 'Street People', 'title');
const result2 = filterRegister(booksData, 123, 'id');
 */
/* console.log(result); */

// function die
// filtrier alle Bücher die genau 80 Euro kosten
// erstellt einen neuen array nur mit den Title

// GIBT UNS EIN ARRAY ZURÜCK
// DRÜCKT ABER NICHTS

/* arrayFromFilteredArray(booksData, 'price', 80, 'title'); */

/* console.log(mapFromFilteredArray); */

// DRÜCKT EIN ARRAY
// GIBT UNS NICHTS

const arrayFromFilteredArray = (array, parameter, value, mapKey, action) => {
  const filteredRegisters = filterRegister(array, value, parameter);

  const titleArray = action(filteredRegisters, mapKey);
  return titleArray;
};

const printFromFilteredArray = (array, parameter, value, action) => {
  const filteredRegisters = filterRegister(array, value, parameter);

  action(filteredRegisters);
};

const actionFromFilteredArray = (array, parameter, value, mapKey, action) => {};

/* arrayFromFilteredArray(booksData, 'price', 80, 'title', mapRegisters);
arrayFromFilteredArray(booksData, 'price', 80, "",  printAllData);
 */

