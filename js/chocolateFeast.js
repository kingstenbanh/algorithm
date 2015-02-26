/**
 * Problem Statement
 Little Bob loves chocolates, and goes to a store with $N in his pocket.
 The price of each chocolate is $C. The store offers a discount:
 for every M wrappers he gives to the store, he gets one chocolate for free.
 How many chocolates does Bob get to eat?

 * Sample Input
 3
 10 2 5
 12 4 4
 6 2 2
 (N, C, M) > (Available Money, Price Per Chocolate, Wrappers For Cholate)

* Sample Output
6
3
5
 */
 var chocolateFeast = function(round, actions) {
  for (var i = 0; i < round; i++) {
    var totalChocolate = totalWrappers = actions[i][0] / actions[i][1];
    var remainWrappers = totalWrappers;

    while (remainWrappers >= actions[i][2]) {
      extras = Math.floor(remainWrappers / actions[i][2]);
      totalChocolate += extras;
      remainWrappers = extras + remainWrappers % actions[i][2];
      totalWrappers = extras + remainWrappers;
    }
    console.log(Math.floor(totalChocolate));
  }
  return void(0);
}

var input = [ [10, 2, 5], [12, 4, 4], [6, 2, 2]];
console.log(chocolateFeast(3, input));
