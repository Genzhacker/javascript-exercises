const sumAll = function(x, y) {
    if (isNaN(x) || isNaN(y) || !Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }

    const start = Math.min(x, y);
    const end = Math.max(x, y);
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
