import Foundation

func solution(_ n:Int) -> Int {
    let root = Int(sqrt(Double(n)))  
    
    if root * root == n {
        return 1  
    } else {
        return 2  
    }
}