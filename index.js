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

// SPECIAL VALUES IN JAVASCRIPT

// 1. NAN

// NaN is a property of the global object. In other words, it is a variable in global scope.
// NAN is not equal to anything including itself. the type of the NaN is number but its just a invalid number.

// var x = Number("Hello World");
// var y = Number("Hello World");
// var z = 10;

//  console.log(z-x); // NaN
// console.log(x === y); // false because NaN is not equal to anything including itself
// console.log(x); // NaN
// console.log(isNaN(x)); // true
// console.log(Number.isNaN(y)); // true

// 2. NEGATIVE ZERO

// Negative zero is a number in JavaScript that is the same as zero but has a sign opposite to zero.
// In other words, negative zero is the same as zero but with a negative sign.

//var x = 0;

// console.log(x === -0); // true
// x.toString(); // "0"
// console.log(x === 0); // true
// console.log(x > 0); // false
// console.log(x < 0); // false




 