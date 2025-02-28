const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
  let s = 0;
	arr.forEach(element => s += element);
  return s;
};

const multiply = function(arr) {
  return arr.reduce((m, element) => m * element, 1);
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(x) {
	if([0, 1].includes(x)){
    return 1;
  }else{
    return x * factorial(x-1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
