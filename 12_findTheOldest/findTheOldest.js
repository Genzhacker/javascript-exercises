function NameOfTheOldest(previous, next){
    let currentYear = new Date().getFullYear();
    //let y1 = next.yearOfDeath === undefined? currentYear - next.yearOfBirth : next.yearOfDeath - next.yearOfBirth;
    //let y2 = previous.yearOfDeath === undefined? currentYear - previous.yearOfBirth : previous.yearOfDeath - previous.yearOfBirth;
    let y1 = (next.yearOfDeath || currentYear) - next.yearOfBirth;
    let y2 = (previous.yearOfDeath || currentYear) - previous.yearOfBirth;
    return y1>y2? next : previous;
}

const findTheOldest = function(arr) {
    return arr.reduce(NameOfTheOldest);
};

// Do not edit below this line
module.exports = findTheOldest;
