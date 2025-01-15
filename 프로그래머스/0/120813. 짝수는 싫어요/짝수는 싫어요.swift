import Foundation

func solution(_ n:Int) -> [Int] {
    // var array:[Int] = []
    // for i in 1...n {
    //     if i % 2 == 1 {
    //         array.append(i)
    //     }
    // }
    // return array.sorted()
    
    return (1...n).filter { $0 % 2 == 1 }
}