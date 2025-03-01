const palindromes = function (str) {
    let arr1 = str.toLowerCase().split('').filter(char => (char>='a' && char<='z') || (char>='0' && char<='9'));
    if(arr1.join('') === arr1.reverse().join('')){
        return true;
    }else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
