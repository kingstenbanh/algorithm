/**
 Animesh has N empty candy jars, numbered from 1 to N, with infinite capacity.
 He performs M operations. Each operation is described by 3 integers a, b and k.
 Here, a and b are indices of the jars, and k is the number of candies to be added
 inside each jar whose index lies between a and b (both inclusive). Can you tell the
 average number of candies after M operations?

 - Sample Input
 5 3
 1 2 100
 2 5 100
 3 4 100

 - Sample Output
 160

 - Explanation
 Initially each of the jar contains 0 candies

 initially, 0 0 0 0 0
 first operation, 100 100 0 0 0
 second operation, 100 200 100 100 100
 third operation, 100 200 200 200 100

 total = 800 > average = 800 / 5 = 160
 */
 var fillingJars = function(input) {
   var sum = 0;

   for (var i = 1; i < input.length; i++) {
       sum += (input[i][1] - input[i][0] + 1) * input[i][2];
   }
   return Math.floor(sum / input[0][0]);
};

var input = [[4, 3], [2, 3, 603], [1, 1, 286], [4, 4, 882]]

console.log(fillingJars(input));
