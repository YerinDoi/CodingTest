import Foundation

func solution(_ my_string:String) -> Int {
    let numbers = my_string.filter { $0.isNumber } // 숫자만 필터링
    return numbers.reduce(0) { $0 + Int(String($1))! } // 문자 → 정수 변환 후 합계 계산
}
