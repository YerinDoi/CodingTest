import Foundation

func solution(_ numbers:[Int]) -> Int {
    // numbers 배열을 오름차순으로 정렬
    let sortedNumbers = numbers.sorted()

    // 가장 큰 두 수의 곱과 가장 작은 두 수의 곱을 계산
    let maxProduct = sortedNumbers[sortedNumbers.count - 1] * sortedNumbers[sortedNumbers.count - 2]
    let minProduct = sortedNumbers[0] * sortedNumbers[1]

    // 두 값 중 더 큰 값을 반환
    return max(maxProduct, minProduct)
}
