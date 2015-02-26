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
import Darwin

func chocolateFeast(rounds: Int, actions: Array<Array<Int>>) {
    for var i = 0; i < rounds; i++ {
        var money = actions[i][0]
        var cost = actions[i][1]
        var rate = actions[i][2]

        var totalChoclate = money / cost
        var totalWrappers = totalChoclate
        var remainWrappers = totalWrappers
        
        while (remainWrappers >= rate) {
            var extras = remainWrappers / rate
            totalChoclate += extras
            remainWrappers = extras + remainWrappers % rate
            totalWrappers = extras + remainWrappers
        }
        println("With $\(money), Little Bob can buy \(totalChoclate) pieces")
    }
}
chocolateFeast(3, [[10, 2, 5], [12, 4, 4], [6, 2, 2]])