// Exercise 2.1
const isEven = function(number) {
  return number % 2 === 0;
};
console.log(isEven(4)); // true
console.log(isEven(7)); // false

// Exercise 2.2
const isEvenArrow = (number) => number % 2 === 0;
console.log(isEvenArrow(4)); // true
console.log(isEvenArrow(7)); // false