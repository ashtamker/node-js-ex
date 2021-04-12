// const yargs = require('yargs');

// yargs.command({
//     command: 'cal',
//     describe: 'Simple calculator',
//     builder: {
//         add: {
//             describe: 'sum 2 num',
//             type: 'number',
//         },
//         sub: {
//             describe: 'sub the second num from the first',
//             type: 'number',
//         }
//     },

//     handler: function (a,b) {
//         let sum =  a + b;
//         let sub = a - b;
//         console.log('sum:' + sum);
//         console.log('sub' + sub);
//     }
// })



// yargs.parse();
// // console.log(yargs.argv);

const summation = (a, b) =>  a + b;
const subtraction = (a, b) =>  a - b;
const multiply = (a, b) => a * b;
const power = (a) =>  a * a;

const yargs = require("yargs");

const action = process.argv[2];
const a = yargs.argv.a;
const b = yargs.argv.b;
 
let result = "";
 
if ( action === "sum") {
  result = summation(a, b);
} 
else if (action === "sub") {
  result = subtraction(a, b);
}
else if (action === "multi") {
    result = multiply(a, b);
}
else if (action === "pow") {
    result = power(a);
}

 
console.log(`The ${action} of ${a} , ${b} is: ${result}`)