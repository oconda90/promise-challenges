/*
 *******************************************************************************
 * INSTRUCTIONS:
 * Follow the steps below and answer the discusssion questions that follow.
 * 
 * 1. Read over the code that follows. In what order will the outputs "Step 1",
 *    "Step 2", and "Step 3" be printed? How do you know?
 * 
 * My answer: The Output will be in this order: step 1, step 3 , step2. This is beacuse
 * there is a snooze function that delays the output of 'step2' by 2000 so thats why it will
 * print this way
 *
 * 
 * 
 * 2. Run this code using `node challenge1.js`. In what order were the steps
 *    printed?
 * 
 * My answer: It printed out in the way I belived it was going to. Step1, Step3, Step2
 * 
 * 3. Change the delay time in the `snooze` function from 2000 ms to 0. In what
 *    order will the steps be printed now? Why? Re-run the code again to verify
 *    your expectation. Were you correct?
 * 
 * My answer: Before we run the code i think the output sequence wont change the only
 * thing that would be different would be the time step 2 is printed out which would be instant 
 * this time around. After running the code i figured out i was right the only change was the
 * speed of which step 2 was outputted.
 * 
 *******************************************************************************
 */

/* This function takes a callback as a parameter. */
function snooze(action) {
    setTimeout(function() {
      action();
    }, 0);
}
console.log('Step 1');

snooze( function() {
    console.log('Step 2');
    console.log("Async Action completed via callback");
} );

console.log('Step 3');

