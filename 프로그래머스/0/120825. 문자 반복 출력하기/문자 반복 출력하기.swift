import Foundation

func solution(_ my_string:String, _ n:Int) -> String {
    var result:String = ""
    for chr in my_string {
        for _ in 0..<n {
            result += String(chr)
        }
    }
    return result
}