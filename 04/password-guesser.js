const MIN = 246515;
const MAX = 739105;

function checkPasswords() {
    let count = 0;
    for (let pass = MIN; pass <= MAX; pass++) {
        if (nonDecreasing(pass)) {
            count++;
        }
    }
    return count;
}

function nonDecreasing(pass) {
    const strNum = pass.toString();
    // numbers never decrease;
    let hasAdjacentMatch = false;
    for (let i = 0; i < strNum.length - 1; i++) {
        // part one
        // if (strNum[i] === strNum[i+1]) {
        //     hasAdjacentMatch = true;
        // }

        // part 2
        if (strNum[i] === strNum[i+1]) {
            if (i+2 < strNum.length && strNum[i+1] === strNum[i+2]) {
                i += 2;
                while (i < strNum.length - 1  && strNum[i] === strNum[i+1]) {
                    i++;
                }
            }
            else {
                hasAdjacentMatch = true;
            }
        }

        if (strNum[i] > strNum[i+1]) {
            return false;
        }
    }
    return hasAdjacentMatch;
}

console.assert(!nonDecreasing(111111));
console.assert(nonDecreasing(123455));
console.assert(!nonDecreasing(246515), "246515");
console.assert(nonDecreasing(112233), "112233");
console.assert(!nonDecreasing(123444), "123444");
console.assert(nonDecreasing(111122), "111122");

console.log(checkPasswords());
