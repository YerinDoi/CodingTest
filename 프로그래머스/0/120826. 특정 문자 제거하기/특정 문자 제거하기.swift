import Foundation

func solution(_ my_string:String, _ letter:String) -> String {
    // return my_string.filter { String($0) != letter }
    var result = ""
    
    for chr in my_string {
        
        if String(chr) != letter {
            result += String(chr)
        }
    }
    return result
}