import Foundation

func solution(_ rsp:String) -> String {
    var result = ""
    
    for chr in rsp {
        if chr == "0" {
            result += "5"
        } else if chr == "2" {
            result += "0"
        } else {
            result += "2"
        }
    }
    return result
}