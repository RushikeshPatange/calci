const [,, ...args] = process.argv;

const num1 = parseInt(args[0], 10) || 10;
const num2 = parseInt(args[1], 10) || 5;

console.log(`Received arguments: ${num1} and ${num2}`)

const adder = require('@calci/adder')

console.log(`Addition of ${num1} and ${num2} is ${adder(num1, num2)}`)