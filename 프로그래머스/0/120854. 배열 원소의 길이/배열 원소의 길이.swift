import Foundation

func solution(_ strlist:[String]) -> [Int] {
    var length:[Int] = []
    for str in strlist {
        length.append(str.count)
    }
    return length
}
