import Foundation

func solution(_ strlist:[String]) -> [Int] {
    var countList:[Int] = []
    for i in strlist {
        countList.append(i.count)
    }
    return countList
}