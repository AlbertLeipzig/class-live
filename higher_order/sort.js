import employeesData from '../data/employees-data.json' assert { type: 'json' };
// sort()

const numbers = [1, 5, 34, 2, 7, 3, 7, 8];
//[1, 5, 2, 34, 7, 3, 7, 8];

const words = [
  'apple',
  'dog',
  'elephant',
  'flower',
  'grape',
  'kiwi',
  'as',
  'lemon',
  'orange',
  'quilt',
  'strawberry',
  'I',
  'tiger',
  'watermelon',
  'a',
  'zebra',
];

// -1 => a, b
// 1 => b, a

const sortedNumbers = numbers.sort((a, b) => a - b);
const sortedWords = words.sort((a, b) =>
  a.toLowerCase() < b.toLowerCase() ? -1 : 1
);

const sortedEmployees = employeesData.sort((a, b) => {
  // lastName
  // firstName

  if (a.lastName.toLowerCase() < b.lastName.toLowerCase()) {
    return -1;
  } else if (a.lastName.toLowerCase() === b.lastName.toLowerCase()) {
    return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1;
  } else {
    return 1;
  }

  //

  /* return a.firstName.toLowerCase() < b.firstName.toLowerCase() ? -1 : 1; */
});

const result = sortedEmployees;
/* console.log(result); */

/* const sortEmployees = () => {

    const sortPerFirstName
    const sortPerLastName
    const sortPerBirthDate
    
} */