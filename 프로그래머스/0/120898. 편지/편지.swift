import Foundation

func solution(_ message:String) -> Int {
    let costPerLetter = 2
    return message.count * costPerLetter
}