// Question 2
// Let S be the set of numbers greater than zero and less than 100,000 that are evenly divisible by 19.
// 1. How many numbers are there in S?
// 2. How many numbers in S have a square that ends in a 1?
// 3. How many numbers in S have a reflection that is also in S? (The reflection of 145 is 541)
// 4. How many numbers in S can be multiplied by some other number in S to produce a third number in S?

// My Answers to Question 2 ___________________________________________________

// 1.
var s = 0;

for (i=1; i < 100000; i++) {
  if (i % 19 === 0) {
    s++
  }
}

console.log(s);
// => 5623

// 2.

s = [];
for (i=1; i < 100000; i++) {
  if (i % 19 === 0) {
    s.push(i);
  }
}

var sqrts = [];
var intSqrts = [];
var digitsArr = [];
var lastIsOne = 0;
s.forEach(function(num) {
  sqrts.push(Math.sqrt(num));
});

sqrts.forEach(function(num) {
  if (num / Math.ceil(num) === 1) {
    intSqrts.push(num);
  }
});

intSqrts.forEach(function(num) {
  digitsArr.push((""+num).split(""));
});

digitsArr.forEach(function(num) {
  if (num[num.length - 1] === '1') {
    lastIsOne++;
  }
});

console.log(lastIsOne);
// => 1

// 3.

s = [];
for (i=1; i < 100000; i++) {
  if (i % 19 === 0) {
    s.push(i);
  }
}

var newArr = [];
var revArr = [];
var counter = 0;

s.forEach(function(num) {
  revArr.push((""+num).split(""));
});

revArr.forEach(function(arr) {
  newArr.push(arr.reverse().join(''));
});

newArr.forEach(function(num) {
  s.forEach(function(sNum) {
    if (num == sNum) {
      counter++;
    }
  });
});

console.log(counter);
// => 280

// 4.

s = [];
for (i=1; i < 100000; i++) {
  if (i % 19 === 0) {
    s.push(i);
  }
}

counter = 0;

s.forEach(function(num1) {
  var product;
  s.forEach(function(num2) {
    var product = num1 * num2;
  });
  s.forEach(function(prod) {
    if (product === prod) {
      counter ++;
    }
  });
});

console.log(counter);
// => 0

