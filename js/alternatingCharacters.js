/**
 * Shashank likes strings in which consecutive characters are different.
 * For example, he likes ABABA, while he doesn't like ABAA. Given a string containing
 *  characters A and B only, he wants to change it into a string he likes. To do this,
 *  he is allowed to delete the characters in the string.
 * Your task is to find the minimum number of required deletions.
 *
 * Example
 * AAAA -> A, 3 deletions
 * BBBBB -> B, 4 deletions
 * ABABABAB -> ABABABAB, 0 deletions
 * BABABA -> BABABA, 0 deletions
 * AAABBB -> AB, 4 deletions
 */
 var alternatingCharacters = function(input) {
  var count = 0;
  for (var i = 0; i < input.length; i++) {
    if (input.charAt(i + 1) === input.charAt(i)) {
      count++;
    }
  }
  return count;
 }
console.log(alternatingCharacters("AAAA"));
console.log(alternatingCharacters("BBBBB"));
console.log(alternatingCharacters("ABABABAB"));
console.log(alternatingCharacters("BABABA"));
console.log(alternatingCharacters("AAABBB"));
