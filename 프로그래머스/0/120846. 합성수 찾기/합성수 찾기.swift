import Foundation

func solution(_ n: Int) -> Int {
    // 1부터 n까지 합성수 개수를 찾음
    var count = 0
    for num in 1...n {
        let divisors = (1...num).filter { num % $0 == 0 }
        if divisors.count > 2 {
            count += 1
        }
    }
    return count
}

