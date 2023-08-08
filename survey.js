/**
 * Read by line instead of by character
 * look at the 1st example
 * try the .question(query, callback)function 
 * .close() function
 * teying thier example code in the test file
 */


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});