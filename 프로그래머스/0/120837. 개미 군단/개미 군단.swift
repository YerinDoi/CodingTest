import Foundation

func solution(_ hp: Int) -> Int {
    let generalAnts = hp / 5          // 장군개미
    let soldierAnts = (hp % 5) / 3    // 병정개미
    let workerAnts = (hp % 5) % 3     // 일개미

    return generalAnts + soldierAnts + workerAnts
}
