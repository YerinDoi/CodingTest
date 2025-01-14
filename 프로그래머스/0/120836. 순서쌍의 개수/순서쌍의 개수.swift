import Foundation

func solution(_ n: Int) -> Int {
    var count = 0
    
    // 1부터 n까지 반복하여 a 값을 찾음
    for a in 1...n {
        // a가 n을 나누었을 때 나머지가 0이면 b는 자연수가 된다.
        if n % a == 0 {
            count += 1
        }
    }
    
    return count
}

