import Foundation

func solution(_ numbers: [Int]) -> Int {
    let sortedNumbers = numbers.sorted()
    let n = sortedNumbers.count
    return sortedNumbers[n - 1] * sortedNumbers[n - 2]
}
