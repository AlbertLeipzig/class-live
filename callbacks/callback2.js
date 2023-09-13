import users from '../data/users-data.json' assert { type: 'json' };

const searchValue = 2;

const findUser = users.find((user) => user.id === searchValue);

/* (user) => user.id === searchValue */

/* const button = document.querySelector('button'); */

/* button.addEventListener("click", () => {

}) */

console.log("Before");
setTimeout(() => console.log("It's Time"), 500);
console.log("After");

