// Problem Statement
// There are N integers in an array A. All but one integer occur in pairs.
// Your task is to find out the number that occurs only once.

func lonelyInteger(input: Array<Int>) -> Int {
    var records = Dictionary<Int, Int>()
    var answer: Int!
    for var i = 0; i < input.count; i++ {
        if (records[input[i]] == nil) {
            records[input[i]] = 1
        } else {
            records[input[i]]!++
        }
    }
    for key in records.keys {
        if (records[key] == 1) {
            answer = key
        }
    }
    return answer
}

lonelyInteger([1, 1, 2, 2, 3])