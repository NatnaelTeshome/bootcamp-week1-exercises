/**
 * Part 1:
 *    What will print and why? 1 2 and undefined. First 1 is printed because we are printing a variable 'a' in the global scope that has a value of 1.
 *      2 is printed because we have now called y, which is a new function and has its own lexical scope. In that scope the value of 'a' is 2, and that is printed.
 *      undefined is printed because within function y, function x is called and within function x, which has its own lexical scope called on top of y, a variable called 'a' is declared but not assigned a value, so it prints undefined.
 *    What will change if we delete line 15? Why?
 *    it will print 1 2 1 because now instead of undefined, 2 is printed because within function x, the value of 'a' is taken from the enclosing function y. 
 * Part 2:
 *    Change to ES6 syntax (use arrow functions and change var to let).
 *    
 * Part 3:
 *    Modify the code so that it prints 1, 2, 2, in that order. Do not move
 *        console logs.
 */

let x = () => {
  let a = 2;
  console.log(a);
}

let y = () => {
  let a = 2;
  console.log(a);
  x();
}

let a = 1;
console.log(a);
y();
