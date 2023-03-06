const convertToCelsius = function(temp) {
  temp = (temp - 32) * 5/9 ;
  celsius = Math.round(temp * 10) / 10;
  return celsius;
};

const convertToFahrenheit = function(temp) {
  temp = (temp * 9/5) + 32;
  fahrenheit = Math.round(temp * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};