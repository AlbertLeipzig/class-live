const sume = (a, b) => a + b;
const rest = (a, b) => a - b;

const printSentence = (action) => {
  return action(2, 4);
};

console.log(printSentence(sume));
console.log(printSentence(rest));
