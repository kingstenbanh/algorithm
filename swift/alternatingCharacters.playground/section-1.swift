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
func alternatingCharacters(input: String) -> Int {
    var count = 0
    var stringArray = Array(input)

    for var i = 1; i < stringArray.count; i++ {
        if stringArray[i] == stringArray[i-1] {
            count++
        }
    }
    
    return count
}
alternatingCharacters("AAAA")
alternatingCharacters("BBBBB")
alternatingCharacters("ABABABAB")
alternatingCharacters("BABABA")
alternatingCharacters("AAABBB")