// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
import Darwin

func multiplesOfThreeAndFive(input: Int) -> Int {
    var sum = 0
    for var i = 0; i < input; i++ {
        if i % 3 == 0 || i % 5 == 0 {
            sum += i
        }
    }
    return sum
}

multiplesOfThreeAndFive(1000)

func sumDivisibleBy(target: Int, n: Int) -> Int {
    let p = (target - 1) / n
    return n * (p * (p + 1)) / 2
}

func multiplesOf3And5(target: Int) -> Int {
    return sumDivisibleBy(target, 3) + sumDivisibleBy(target, 5) - sumDivisibleBy(target, 15)
}
multiplesOf3And5(1000)