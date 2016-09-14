// Declare 4 variables (w, x, y, z), and there values (2, 4, 6, 8).
var w = 2;
var x = 4;
var y = 6;
var z = 8;

console.log(w, x, y, z);

// Mathematical Evaluations
// Create 4 Mathematical Expressions with new values and solve for values (w, x, y, z)
var value1 = (x - w);
// (4 - 2) = 2
console.log(value1);

var value2 = (z - x);
// (8 - 4) = 4
console.log(value2);

var value3 = (x + w);
// (4 + 2) = 6
console.log(value3);

var value4 = (w + y);
console.log(value4);

// Conditional Statements
// Created 4 conditional statements that if greater than or equal to one of the respective assigned
// variable values (2, 4, 6, 8), will log "SUCCESS". If not and "ERROR" is logged.

// 2
if (w >= 2 && w < 12)
  console.log("SUCCESS!");
else if (w >= 12 && w < 22)
  console.log("ERROR...");

// 4
if (x >= 4 && x < 14)
  console.log("SUCCESS!");
else if (x >= 14 && x < 24)
  console.log("ERROR...");

// 6
if (y >= 6 && y < 16)
  console.log("SUCCESS!");
else if (y >= 16 && y < 26)
  console.log("ERROR...");

// 8
if (z >= 8 && z < 18)
  console.log("SUCCESS!");
else if (z >= 18 && z < 28)
  console.log("ERROR...");

// Loops
// Created 4 "for" loops that repeat until each specified condition (2. 4, 6, 8) evaluate to false

// 2
var w = 2;
var loop = function() {
    for (var i = 0; i < 3; i++) {
      // Loops 3 times, with values of 0 through 2.
        console.log("It's a loop!");

    }
};
loop();

// 4
x = 4;
var loop = function() {
    for (var i = 0; i < 5; i++) {
      // Loops 4 times, with values of 0 through 4.
        console.log("Another Loop!");
    }
};
loop();

// 6
y = 6;
var loop = function() {
    for (var i = 0; i < 7; i++) {
      // Loops 6 times, with values of 0 through 6.
        console.log("...and another Loop!");
    }
};
loop();

// 8
z = 8;
var loop = function() {
    for (var i = 0; i < 9; i++) {
      // Loops 8 times, with values of 0 through 8.
        console.log("Finally, we have a...LOOP!");
    }
};
loop();

// Functions
// Declared 4 functions each of which return the product of (a * b)
// each function upon execution produce a product equal to one of the 4
// variable values determined in the beginning (2, 4, 6, 8)

// 2
var w = myFunction(1, 2);
function myFunction(a, b) {
    console.log(a * b);
    return a * b;                // Function returns the product of a and b
}

// 4
var x = myFunction(2, 2);
function myFunction(a, b) {
    console.log(a * b);
    return a * b;                // Function returns the product of a and b
}

// 6
var y = myFunction(2, 3);
function myFunction(a, b) {
    console.log(a * b);
    return a * b;                // Function returns the product of a and b
}

// 8
var z = myFunction(1, 8);
function myFunction(a, b) {
    console.log(a * b);
    return a * b;                // Function returns the product of a and b
}
