const convertToCelsius = function(fahrenheit) {
  const celsius = (fahrenheit - 32) * 5 / 9; 
  const celsiusRound = Math.round(celsius * 10) / 10;
  return celsiusRound;
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = celsius * 9/5 + 32;
  const fahrenheitRound = Math.round(fahrenheit * 10) / 10;
  return fahrenheitRound;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
