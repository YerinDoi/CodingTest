import Foundation

func solution(_ n:Int) -> Int {
    return String(n).reduce(0) { $0 + Int(String($1))! }
}


// 0은 누적 계산의 초기값입니다(합계를 계산할 시작점).

// 클로저에서 $0와 $1
// $0: 현재까지 계산된 합산값 (누적된 결과).
// $1: 문자열에서 현재 순회 중인 문자(character). -> 문자열로 변환 후 int로 전환

// 변환하려는 문자열 String($1)이 숫자로 변환될 수 없는 경우, nil을 반환하기 때문에
// 입력값 n이 항상 숫자라는 가정하에, 변환이 항상 성공한다는 확신이 있기 때문에 !를 사용