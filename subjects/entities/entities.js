/* -----------------------------------------------------------------------------
  Reducers

  Learn to use function reducers to transform data.

  Task:

  Create a set of reducers using variable `input`. Get all of the tests in
  entities.test.js passing.

----------------------------------------------------------------------------- */

const DataPoint = require('data-point')

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

function getLocalsPageId (acc) {
  return acc.locals.planetId
}

// create new DataPoint instance
const dataPoint = DataPoint.create({
  entities: {
    // use PathReducer to access a property in an object
    'transform:getAllPlanets': '$starWars.planets',

    // use PathReducer to access a property in an object
    'transform:getFirstPlanet': '$starWars.planets[0]',

    // using an array you can combine a PathReducer and a FunctionReducer
    'transform:greetFirstPlanet': ['$starWars.planets[0].name', greetPlanet],

    // you may an entity to map values from an array
    'transform:getPlanetName': '$name',

    // Reducer
    'transform:getPlanetNames': ['$starWars.planets', 'transform:getPlanetName[]'],
    'request:getAlderaanInfo': {
      url: 'https://swapi.co/api/planets/2/'
    },
    'request:getPlanetInfo': {
      url: 'https://swapi.co/api/planets/{value}/'
    },
    'entry:getSecondPlanetInfo': ['$starWars.planets[1].id', 'request:getPlanetInfo'],
    'entry:getPlanetById': [getLocalsPageId, 'request:getPlanetInfo']
  }
}, input)

function getAllPlanets () {
  return dataPoint.transform('transform:getAllPlanets', input)
}

function getFirstPlanet () {
  return dataPoint.transform('transform:getFirstPlanet', input)
}

function greetFirstPlanet () {
  return dataPoint.transform('transform:greetFirstPlanet', input)
}

function getPlanetNames () {
  return dataPoint.transform('transform:getPlanetNames', input)
}

function getAlderaanInfo () {
  return dataPoint.transform('request:getAlderaanInfo', input)
}

function getSecondPlanetInfo () {
  return dataPoint.transform('entry:getSecondPlanetInfo', input)
}

// pass an options parameter to transform where you can set
// add a value to options.locals and use it in your reducers.
function getPlanetById (planetId) {
  return dataPoint.transform('entry:getPlanetById', input, {
    locals: {
      planetId
    }
  })
}

module.exports = {
  getAllPlanets,
  getFirstPlanet,
  greetFirstPlanet,
  getPlanetNames,
  getAlderaanInfo,
  getSecondPlanetInfo,
  getPlanetById
}
