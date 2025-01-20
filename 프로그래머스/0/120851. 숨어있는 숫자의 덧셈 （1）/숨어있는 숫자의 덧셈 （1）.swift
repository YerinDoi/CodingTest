import Foundation

// isNumber 이용
// func solution(_ my_string:String) -> Int {
//     let numbers = my_string.filter { $0.isNumber }
//     return numbers.reduce(0) { $0 + Int(String($1))! }
// }

func solution(_ my_string:String) -> Int {
    return my_string.compactMap { Int(String($0)) }.reduce(0, +)
}
