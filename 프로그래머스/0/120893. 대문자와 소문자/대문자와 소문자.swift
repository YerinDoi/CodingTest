import Foundation

func solution(_ my_string:String) -> String {
    return my_string.map { chr in 
        if chr.isUppercase {
            return chr.lowercased()
        } else if chr.isLowercase {
            return chr.uppercased()
        } else {
            return String(chr)
        }
    }.joined()
}