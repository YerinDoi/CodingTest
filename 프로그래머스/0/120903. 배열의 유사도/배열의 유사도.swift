import Foundation

func solution(_ s1:[String], _ s2:[String]) -> Int {
    var count = 0
    
    for c1 in s1 {
        for c2 in s2 where c1 == c2 {
            count += 1
        }
    }
    
    return count
}