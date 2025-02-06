function solution(emergency) {
    const sortedEmergency = [...emergency].sort((a, b) => b - a);
    return emergency.map(a => sortedEmergency.indexOf(a) + 1)
}