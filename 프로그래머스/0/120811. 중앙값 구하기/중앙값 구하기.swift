import Foundation

func solution(_ array:[Int]) -> Int {
    let sort = array.sorted()
    let middle = (array.count + 1) / 2
    return sort[middle - 1]
}