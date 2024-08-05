const [,, ...args] = process.argv;

const num1 = parseInt(args[0], 10) || 10;
const num2 = parseInt(args[1], 10) || 5;

console.log(`Received arguments: ${num1} and ${num2}`)

const substractor = require('@calci/substractor')

console.log(`Substraction of ${num1} and ${num2} is ${substractor(num1, num2)}`)