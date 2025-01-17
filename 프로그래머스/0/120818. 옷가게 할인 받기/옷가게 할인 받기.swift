import Foundation

func solution(_ price: Int) -> Int {
    var discountPrice = 0
    
    // 할인 조건 적용
    if price >= 500_000 {
        discountPrice = price * 80 / 100  // 20% 할인
    } else if price >= 300_000 {
        discountPrice = price * 90 / 100  // 10% 할인
    } else if price >= 100_000 {
        discountPrice = price * 95 / 100  // 5% 할인
    } else {
        discountPrice = price  // 할인 없음
    }

    return discountPrice
}

