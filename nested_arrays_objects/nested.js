/* import fridgeData from './fridgeData.json' assert { type: 'json' }; */

// objects in objects

// objects in arrays

// arrays in objects

// arrays in arrays

// manufacturer : X             ["samsung", "lg", "whirlpool"]
// fridges color : X            ["stainless steel", "black", "white"]
// has feature : "led display"
// height mindestens 72
// min temperature im fridge is at least 35
// average consumption is max 150 watts
// average rating is 3.5 or higher

// test values

const value1 = '150watt';
const value2 = 'watt 150';
const value3 = '123 123';

// 1. Methode => parseFloat()

const printParsedValue = (rawInput) => {
  const value = parseFloat(rawInput);
  console.log(value);
};

printParsedValue(value1);
printParsedValue(value2);
printParsedValue(value3);

// 2. Methode => split(" ")

const printSplittedValue = (rawInput) => {
  const numericValues = rawInput.split(' ').filter((item) => {
    const parsed = parseInt(Number(item));
    return parsed;
  });
  console.log(numericValues);
};

printSplittedValue(value1);
printSplittedValue(value2);
printSplittedValue(value3);

/* const getNumberFromString = (string) => {
    const characterArray = Array.from(string);
    let number = '';
  
    for (const char of characterArray) {
      if (!isNaN(parseInt(char))) {
        number += char;
      } else {
        break;
      }
    }
    return number;
  }; */
/* const getNumberFromString = (string) => {
  const number = Array.from(string)
    .filter((char) => !isNaN(parseInt(char)))
    .join('');
  return number;
}; */

//console.log(result1);
//console.log(result2);
//console.log(result3);
