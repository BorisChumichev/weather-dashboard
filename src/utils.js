export const chanceOfRain = (pressure, temperature, amount) => {
  var score = Math.log(amount + 1) * Math.log(pressure - 929) * Math.log(temperature - 9)
  var mean = Math.min(Math.max(score, 0), 100)
  var upperBound = Math.min(1.5 * mean, 100)
  var lowerBound = Math.max(0.5 * mean, 0)
  return { lowerBound, mean, upperBound }
}
