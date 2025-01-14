import Foundation

// func solution(_ my_string:String, _ n:Int) -> String {
//     var result:String = ""
//     for chr in my_string {
//         for _ in 0..<n {
//             result += String(chr)
//         }
//     }
//     return result
// }

func solution(_ my_string:String, _ n:Int) -> String {
    return my_string.map { String(repeating: String($0), count: n) }.joined()
}