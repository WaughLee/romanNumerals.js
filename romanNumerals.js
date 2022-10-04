let romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

let n = 'MCMLXXXIX'
// n = 1989
function romanToNum(n) {
    let num = 0;

    for (let i = 0; i < n.length; i++) {
        if (n[i] === 'I' && n[i + 1] === 'V') {
            num += 4;
            i++;
        } else if (n[i] === 'I' && n[i + 1] === 'X') {
            num += 9;
            i++;
        } else if (n[i] === 'X' && n[i + 1] === 'L') {
            num += 40;
            i++
        } else if (n[i] === 'X' && n[i + 1] === 'C') {
            num += 90;
            i++;
        } else if (n[i] === 'C' && n[i + 1] === 'D') {
            num += 400;
            i++;
        } else if (n[i] === 'C' && n[i + 1] === 'M') {
            num += 900;
            i++;
        } else {
            num += romanHash[n[i]];
        }
    }
    return num

}

console.log(romanToNum(n))

