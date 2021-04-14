/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. What will be printed to the console when
 *    it runs? Run the code using `node challenge2.js` and verify that your
 *    expectation was correct.
 * 
 * My answer: before running the code I beleive that the output will be: 
 *   "Hello there, Ducky" and "MAKE SCHOOL IS AWESOME!!!." This is becuase the function greet() 
 * takes in the parameter of name and if the name is a string itll print out "Hello there, (name)" and if the name isnt
 * a string itll be rejected. And for The second function, uppercase(str) it takes the arguement of a string and makes all the 
 * letter upppercase and if the inputn isnt a string itll be rejected and print out "Argument to uppercaser must be string."
 * after i ran the code i realized what i predicted was correct.
 * 
 * 2. What happens if greet() fails? Make it fail by changing 'name' to a number
 *    instead of a string. What happens? Does uppercaser() still run?
 * 
 *  My answer: If the function greet() fails there will be an error and will also print "Name must be a string!. And
 * if the greet function failed the uppercase(str) function would fail as well and print out "Argument to uppercaser must be string."
 * 
 * 3. What happens if greet() succeeds and uppercaser() fails? Modify your code
 *    to achieve this result by changing the values of 'name' and 'my_str' and
 *    run the code again.
 * 
 * My answer: If greet() passes, then greet() will run and print out the resulting output.
 * Although if uppercase() fails then console throws an error and in the case of an error, the uppercase() function
 * will print out "Argument to uppercaser must be string."
 * 
 * 4. Write a method that takes a string as input and returns the input string
 *    with a space added between each character. E.g. 'foo' -> 'f o o'
 * 
 *    Name this method spacer(str). It should run asynchronously, so use a 
 *    setTimeout() and return a Promise.
 * 
 *    Last, call spacer() after you call greeter() and uppercaser().
 * 
 *    Make sure you only have one catch() block. If you have more than one,
 *    refactor your code so that you only have one. 
 * 
 *******************************************************************************
 */

 /**
  * Asynchronously returns a greeting for a specified name.
  * @param name The name of the person to greet.
  */
function greet(name) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        if (typeof name === 'string') { 
          resolve('Hello there, ' + name);
        } else {
          reject('Name must be a string!');
        }
      }, 1000);
    });
}

/**
 * Returns the uppercased version of a string.
 * @param {*} str The string to uppercase.
 */
function uppercaser(str) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
        if (typeof str === 'string') {
            resolve(str.toUpperCase());
        } else {
            reject('Argument to uppercaser must be string');
        }
        }, 1500);
    });
}

/**
 *  Returns the string but with a place in between each letter.
 * @param {*} str The string to space.
 */
 function spacer(str) {
  return new Promise(function(resolve, reject) {
      setTimeout(function() {
      if (typeof str === 'string') {
          resolve(str.split('').join(' '));
      } else {
          reject('Argument to space must be a string!');
      }
      }, 2000);
  });
}


name = 'Ducky'
//name = 746823
my_str = 'Make School is Awesome!!!'
//my_str = 9876324
space_str = "Cosmix"
// space_str = 784236

greet(name)
    .then((greetResult) => {
        console.log(greetResult)
        return uppercaser(my_str);
    })
    .then((uppercaserResult) => {
        console.log(uppercaserResult)
    })
    .then((spacerResult) => {
      console.log(spacerResult)
    })
    .catch((err) => {
        console.log('Received an error!')
        console.log(err);
    });
