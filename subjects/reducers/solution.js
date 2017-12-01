/* -----------------------------------------------------------------------------
  Reducers

  Learn to use function reducers to transform data.

  Task:

  Create a set of reducers using variable `input`. Get all of the tests in
  reducer.test.js passing.

----------------------------------------------------------------------------- */

const DataPoint = require('data-point')
// use this module for fetching a remote resource
const got = require('got')

const input = {
  starWars: {
    planets: [
      {
        'id': 2,
        'name': 'Alderaan'
      },
      {
        'id': 3,
        'name': 'Yavin IV'
      },
      {
        'id': 4,
        'name': 'Hoth'
      },
      {
        'id': 5,
        'name': 'Dagobah'
      },
      {
        'id': 6,
        'name': 'Bespin'
      }
    ]
  }
}

// use string literals to generate greeting
function greetPlanet (acc) {
  return `Hello ${acc.value}!!`
}

// use Array.map to iterate through each planet
function mapPlanetNames (acc) {
  return acc.value.map((planet) => planet.name)
}

// use Array.sort to sort values
function sortPlanetNames (acc) {
  return acc.value.sort()
}

// use got to fetch from a remote resource
function requestPlanet (acc) {
  return got(`$acc.value}`, {json: true})
    .then(res => {
      return res.body
    })
}

// create new DataPoint instance
const dataPoint = DataPoint.create()

// get all the planets from starWars object
// use a https://github.com/ViacomInc/data-point#path-reducer to access an
// object's path
function getPlanets () {
  return dataPoint.transform('$starWars.planets', input)
}

// get the first planet from the array of planets
// use a https://github.com/ViacomInc/data-point#path-reducer to access an
// object's path
function getFirstPlanet () {
  return dataPoint.transform('$starWars.planets[0]', input)
}

// greet the first planet
// create an array that accepts a PathReducer and a FunctionReducer
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function greetFirstPlanet () {
  return dataPoint.transform(['$starWars.planets[0].name', greetPlanet], input)
}

// get an array of all of the names of the planets
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function getPlanetNames () {
  return dataPoint.transform(['$starWars.planets', mapPlanetNames], input)
}

// get a sorted array of all of the names of the planets
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function sortPlanets (acc) {
  return dataPoint.transform(['$starWars.planets', mapPlanetNames, sortPlanetNames], input)
}

// get the information of a specific planet
// reducers accept a Promise as a return value
// https://github.com/ViacomInc/data-point#returning-a-promise
function getPlanetInfo (acc) {
  return dataPoint.transform(['$starWars.planets[0].url', requestPlanet], input)
}

module.exports = {
  getPlanets,
  getFirstPlanet,
  greetFirstPlanet,
  getPlanetNames,
  sortPlanets,
  getPlanetInfo
}
