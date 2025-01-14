import Foundation

func solution(_ my_string: String) -> String {
    // 모음들을 Set으로 정의
    let vowels: Set<Character> = ["a", "e", "i", "o", "u"]

    // filter를 사용하여 모음이 아닌 문자만 남김
    let result = my_string.filter { !vowels.contains($0) }
    
    // 결과를 문자열로 변환하여 반환
    return String(result)
}