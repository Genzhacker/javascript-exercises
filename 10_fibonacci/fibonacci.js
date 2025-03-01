const fibonacci = function(x) {
    x = parseInt(x);
    if(x < 0){
        return "OOPS"
    }else if(x == 0){
        return 0;
    }else if([1, 2].includes(x)){
        return 1;
    }else{
        return fibonacci(x-2) + fibonacci(x-1);
    }
};

// Do not edit below this line
module.exports = fibonacci;
