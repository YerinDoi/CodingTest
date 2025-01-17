import Foundation

let n = readLine()!.components(separatedBy: [" "]).map { Int($0)! }

(1...n[0]).forEach {
    print((1...$0).map { _ in "*" }.joined())
}