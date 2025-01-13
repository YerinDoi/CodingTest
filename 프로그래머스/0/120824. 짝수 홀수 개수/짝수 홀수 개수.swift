import Foundation

func solution(_ num_list:[Int]) -> [Int] {
    var jj = 0
    var hh = 0
    
    for num in num_list {
        if num % 2 == 0 {
            jj += 1
        } else {
            hh += 1
        }
    }
    return [jj, hh]
}