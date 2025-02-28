const convertToCelsius = function(degree) {
  let F = (degree - 32) * 5/9;
  return Math.round(F * 10)/10;
};

const convertToFahrenheit = function(degree) {
  let C = (degree * 9/5) + 32;
  return Math.round(C * 10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
