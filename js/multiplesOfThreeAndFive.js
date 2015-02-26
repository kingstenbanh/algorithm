/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */
 // O(n) time complexity solution
 var multiplesOfThreeAndFive = function(input) {
  var sum = 0;

  for (var i = 0; i < input; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(multiplesOfThreeAndFive(1000));

// O(1) time complexity solution
function sumDivisibleBy(target, n) {
  p = Math.floor(target / n);
  return n * (p * (p + 1)) / 2;
}

var multplesOf3And5 = function(target) {
  return sumDivisibleBy(target, 3) + sumDivisibleBy(target, 5) - sumDivisibleBy(target, 15);
}
console.log(multplesOf3And5(1000));
