// Problem Statement
// There are N integers in an array A. All but one integer occur in pairs.
// Your task is to find out the number that occurs only once.

var lonelyInteger = function(input) {
  var records = {};
  for (var i = 0; i < input.length; i++) {
    if (!records[input[i]]) {
      records[input[i]] = 1;
    } else {
      records[input[i]]++;
    }
  }
  for (var key in records) {
    if (records[key] === 1) {
      return key;
    }
  }
};

var a = [1, 2, 2, 4, 5, 6, 6, 5, 1];
console.log(lonelyInteger(a));
