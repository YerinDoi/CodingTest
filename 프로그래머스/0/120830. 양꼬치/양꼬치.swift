import Foundation

func solution(_ n:Int, _ k:Int) -> Int {
    let service = n / 10
    let total = n * 12000 + k * 2000 - service * 2000
    return total
}
