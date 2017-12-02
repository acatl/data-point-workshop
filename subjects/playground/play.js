const DataPoint = require('data-point')
const dataPoint = DataPoint.create()

// https://swapi.co

console.clear()

dataPoint.transform().then(acc => {
  console.dir(acc.value, { depth: null })
})
