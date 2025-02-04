function solution(cipher, code) {
    const str = cipher.split('');
    let str2 = "";

    for (let i = 0; i < str.length; i++) {
        if ((i + 1) % code === 0) { 
            str2 += str[i];  
        }
    }
    return str2;
}
