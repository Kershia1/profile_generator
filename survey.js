/**
 * Read by line instead of by character
 * look at the 1st example
 * try the .question(query, callback)function 
 * 
 * .close() function
 * 
 * rl.close()
The rl.close() method closes the InterfaceConstructor instance and relinquishes control over the input and output streams. When called, the 'close' event will be emitted.

Calling rl.close() does not immediately stop other events (including 'line') from being emitted by the InterfaceConstructor instance.
 */

/*
What's your name? Nicknames are also acceptable :)
What's an activity you like doing?
What do you listen to while doing that?
Which meal is your favourite (eg: dinner, brunch, etc.)
What's your favourite thing to eat for that meal?
Which sport is your absolute favourite?
What is your superpower? In a few words, tell us what you are amazing at!
*/
//modualrize and refactor the code
// give each question a function, so each only handles 1 item
// use await to wait for the answer to be inputted before next prompt
// prompt also needs to be used to start the survey..how?

const readline = require('readline');

class Survey {
  constructor() {
    this.r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  queryName() {
    this.r1.question('What is your name? You can use a nickname as well. ', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);
      this.r1.close();
    });
  }

  queryActivity() {
    this.r1.question('What is an activity you like doing?', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }

  queryMusic() {
    this.r1.question('What do you listen to while doing that?', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }

  queryMeal() {
    this.r1.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }

  queryFood() {
    this.r1.question('What\'s your favourite thing to eat for that meal?', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }

  querySport() {
    this.r1.question('Which sport is your absolute favourite?', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }

  querySuperpower() {
    this.r1.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
      //this is a prompt awaiting input from the user 
      console.log(`Thank you for your valuable feedback: ${answer}`);

      this.r1.close();
    });
  }
}

//Driver Code
const survey = new Survey();
survey.queryName();
survey.queryActivity();
survey.queryMusic();
survey.queryMeal();
survey.queryFood();
survey.querySport();
survey.querySuperpower();



// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// rl.question('What is your name? You can use a nickname as well. ', (answer) => {
//   //this is a prompt awaiting input from the user 
//   console.log(`Thank you for your valuable feedback: ${answer}`);
// // not outputting the answer
//   rl.close();
// });

//need a callback function to pass the input answer after the user has hit enter.
//when I reply in CLI and hit enter, the answer is outputted to the console.
