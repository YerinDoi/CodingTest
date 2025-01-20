import Foundation

// func solution(_ my_string:String) -> String {
//     return my_string.map { chr in 
//         if chr.isUppercase {
//             return chr.lowercased()
//         } else if chr.isLowercase {
//             return chr.uppercased()
//         } else {
//             return String(chr)
//         }
//     }.joined()
// }

func solution(_ my_string:String) -> String {
    return my_string.map { $0.isUppercase ? String($0).lowercased() : String($0).uppercased() }.joined()
}