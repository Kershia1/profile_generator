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
// prompt also needs to be used to start the survey..how? Looks like async await and promises are needed.... dum dum dum 

const readline = require('readline');

class Survey {
  constructor() {
    this.r1 = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }


  queryName(name) {
    this.r1.question('What is your name? You can use a nickname as well. ', (answer) => {
      name(answer);
    });
  }

  queryActivity(activity) {
    this.r1.question('What is an activity you like doing?', (answer) => {
      activity(answer);
    });
  }

  queryMusic(music) {
    this.r1.question('What do you listen to while doing that?', (answer) => {
      music(answer);
    });
  }

  queryMeal(meal) {
    this.r1.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
      meal(answer);
    });
  }

  queryFood(food) {
    this.r1.question('What\'s your favourite thing to eat for that meal?', (answer) => {
      food(answer);
    });
  }

  querySport(sport) {
    this.r1.question('Which sport is your absolute favourite?', (answer) => {
      sport(answer);
    });
  }

  querySuperpower(superpower) {
    this.r1.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
      superpower(answer);
    });
  }

  begin() { //this is the function that starts the survey
    //each function has a separate callback
    this.queryName((name) => {
      this.queryActivity((activity) => {
        this.queryMusic((music) => {
          this.queryMeal((meal) => {
            this.queryFood((food) => {
              this.querySport((sport) => {
                this.querySuperpower((superpower) => {
                  console.log(`Thank you for your valuable feedback: ${answer}`);
                  this.r1.close(); // stops the survey
                });
              });
            });
          });
        });
      });
    });
  }
}

//Driver Code
const survey = new Survey();
survey.begin();


// survey.queryName();
// survey.queryActivity();
// survey.queryMusic();
// survey.queryMeal();
// survey.queryFood();
// survey.querySport();
// survey.querySuperpower();



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
