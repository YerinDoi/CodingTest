import Foundation

func solution(_ array:[Int], _ n:Int) -> Int {
    var count = 0
    for i in array where i == n {
        count += 1
    }
    return count
    
    // array.filter{ $0 == n ? count += 1}
}