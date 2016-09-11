// Step 1: Define variable x
// Step 2: Define a condition for "while" loop, where by it would loop 3 times.

var x = 5 + 7;
x = 12;
while( x < 15);

// If this condition is TRUE, then let's loop!

x = 12;
while(x < 15);
{ console.log("Here we go, LOOPtie Lou!");
}

// Step 3: Increment x, so that each time it loops, the value of x increments by 1,
// or else x will always = 12, and this will be an infinite loop.
// x++
x = 12;
while (x < 15);
{ console.log("LOOP there it is!");
x++;
}

// Step 4: Now for our function:
x = 12;
var myChallenge = function(x) {
  while(x < 15); {
console.log("Loop, Loop and AWAY!");
x++;
}
myChallenge(x);
};
