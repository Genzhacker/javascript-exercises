const repeatString = function(str, nbr) {
    let ch = '';
    if(nbr === 0){
        return ch;
    }else if(nbr>0){
        for(let i = 0; i<nbr; i++){
            ch+= str;
        }
    }else{
        ch+= "ERROR";
    }
    return ch;
};

// Do not edit below this line
module.exports = repeatString;
