import Foundation

func solution(_ array: [Int]) -> [Int] {
    // 가장 큰 값과 그 인덱스를 찾음
    if let maxValue = array.max(), let maxIndex = array.firstIndex(of: maxValue) {
        return [maxValue, maxIndex] // 결과 배열 반환
    }
    return [] // 배열이 비어 있을 경우 빈 배열 반환
}
