import Foundation

func solution(_ money:Int) -> [Int] {
    let n = money / 5500
    let r = money % 5500
    return [n, r]
}