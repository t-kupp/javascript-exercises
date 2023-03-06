const sumAll = function(n1, n2) {
    if (n1 < 0 || n2 < 0) 
        return "ERROR";
    if (!Number.isInteger(n1) || !Number.isInteger(n2))
        return "ERROR";
    if (n1 > n2) {
        const shifted = n1;
        n1 = n2;
        n2 = shifted;
    }
    let sum = 0;
    for (i = n1; i < n2 + 1; i++) {
        sum += i;
    } return sum;
}

// Do not edit below this line
module.exports = sumAll;
