import Foundation

func solution(_ n:Int, _ t:Int) -> Int {
    return n * Int(pow(2.0, Double(t)))
}

// pow 함수 기본 문법
// func pow(_ x: Double, _ y: Double) -> Double
// x: 밑(base) 값.
// y: 지수(exponent) 값.
// 반환값: x를 y 제곱한 결과를 Double 타입으로 반환