// var v
// console.log(typeof(v)); // undefined

// v= true;
// console.log(typeof(v)); // boolean

// v= {}
// console.log(typeof(v)); // object

// v = [1,2,3,4,5,6,7,8,9,10];
// console.log(typeof(v)); // object

// v = Symbol();
// console.log(typeof(v)); // symbol

// what is eNom list?
// Ans : eNum list is a list of predefined values that are used to define a set of constants. typeof returns a string that identifies the type of the unevaluated operand. it creates a eNum list of the type of the operand.

// console.log(typeof doesntExist); // undefined

// var v =null;
// console.log(typeof(v)); // object

// var v = function(){};
// console.log(typeof(v)); // function

// var v=10n;
// console.log(typeof(v)); // bigint in future

// 1. Undeclared
// A variable is considered undeclared if it has not been declared in the current scope using var, let, or const. 
// Attempting to access an undeclared variable will result in a ReferenceError.
// example console.log(x); // ReferenceError: x is not defined
// In this case, x was never declared, so JavaScript cannot find it and throws an error.

// 2. Undefined
// A variable is declared but undefined if it has been declared but has not been assigned a value.
// In this case, the variable exists but has not been given a value, so its value is undefined.
// example let y; console.log(y); // Output: undefined

// EXAMPLE IN FUNCTION
// function testFunc() {
 // let z;
  //console.log(z); // Output: undefined
//}
// testFunc();


