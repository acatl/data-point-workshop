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
        'name': 'Alderaan',
        'url': 'https://swapi.co/api/planets/2/'
      },
      {
        'name': 'Yavin IV',
        'url': 'https://swapi.co/api/planets/3/'
      },
      {
        'name': 'Hoth',
        'url': 'https://swapi.co/api/planets/4/'
      },
      {
        'name': 'Dagobah',
        'url': 'https://swapi.co/api/planets/5/'
      },
      {
        'name': 'Bespin',
        'url': 'https://swapi.co/api/planets/6/'
      }
    ]
  }
}

// use string literals to generate greeting
function greetPlanet (acc) {
}

// use Array.map to iterate through each planet
function mapPlanetNames (acc) {
}

// use Array.sort to sort values
function sortPlanetNames (acc) {
}

// use got to fetch from a remote resource
function requestPlanet (acc) {
  // return Promise
}

// create new DataPoint instance
const dataPoint = DataPoint.create()

// get all the planets from starWars object
// use a https://github.com/ViacomInc/data-point#path-reducer to access an
// object's path
// second argument to transform is the initial value
function getPlanets () {
  return dataPoint.transform('$starWars.planets', input)
}

// get the first planet from the array of planets
// use a https://github.com/ViacomInc/data-point#path-reducer to access an
// object's path
function getFirstPlanet () {
  return dataPoint.transform()
}

// greet the first planet
// create an array that accepts a PathReducer and a FunctionReducer
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function greetFirstPlanet () {
  return dataPoint.transform()
}

// get an array of all of the names of the planets
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function getPlanetNames () {
  return dataPoint.transform()
}

// get a sorted array of all of the names of the planets
// https://github.com/ViacomInc/data-point#functionreducer
// dataPoint.transform accepts multiple reducers by passing an Array
// https://github.com/ViacomInc/data-point#chained-reducers
function sortPlanets (acc) {
  return dataPoint.transform()
}

// get the information of a specific planet
// reducers accept a Promise as a return value
// https://github.com/ViacomInc/data-point#returning-a-promise
function getPlanetInfo (acc) {
  return dataPoint.transform()
}

module.exports = {
  getPlanets,
  getFirstPlanet,
  greetFirstPlanet,
  getPlanetNames,
  sortPlanets,
  getPlanetInfo
}
