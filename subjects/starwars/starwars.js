const dataPoint = require('data-point').create({
  entities: {
    /*
      Get all the people from the star wars universe

      Make a request to https://swapi.co/api/people/

      Request Entity:
      https://github.com/ViacomInc/packages/data-point/#request-entity
    */
    'request:getPeople': {},

    /*
      Get first person (result) from request:getPeople

      Using chained reducers you can pass the result from one reducer to the
      next one. Reuse request:getPeople and use PathReducer to access the
      first result from the results array.

      ReducerPath:
      https://github.com/ViacomInc/packages/data-point/#path-reducer

      Entry Entity:
      https://github.com/ViacomInc/packages/data-point/#entry-entity

      Chained reducers:
      https://github.com/ViacomInc/packages/data-point/#chained-reducers
    */
    'entry:getLuke': {},

    /*
      Get a Person's basic information

      Using Chained reducers, use entry:getLuke as your initial reducer, and
      pass the result to hash:PersonBasic.

      The result should match the form of:

      {
        "birthYear": "19BBY",
        "name": "Luke Skywalker",
        "species": Array [
          "https://swapi.co/api/species/1/",
        ],
        "starships": Array [
          "https://swapi.co/api/starships/12/",
          "https://swapi.co/api/starships/22/",
        ],
      }

      Hash Entity:
      https://github.com/ViacomInc/packages/data-point/#hash-entity
    */
    'entry:getPersonBasic': {},

    /*
      Get a person's basic information

      Use Hash.mapKeys to map to name, birth_year, species, starships
      Hash.mapKeys:
      https://github.com/ViacomInc/packages/data-point/#hash-mapKeys
    */
    'hash:PersonBasic': {},

    /*
      Get Luke's species details

      Reuse entry:getLuke and through chain reducers get the details needed.

      The result must haave an object of the following form:

      {
        "classification": "mammal",
        "language": "Galactic Basic",
        "name": "Human"
      }
    */
    'entry:getLukeSpecies': {},

    /*
      Fetch a url using the value passed.

      Since we are passing the actual URL to hit as the value of this entity,
      you may use string template to inject the value received.

      String Templates:
      https://github.com/ViacomInc/packages/data-point/#string-template
    */
    'request:getSpecies': {},

    /*
      Pick the keys name, language, classification from the value recevied

      Use the Hash.pickKeys modifier, pass an array of keys you want to pick.

      Hash.pickKeys:
      https://github.com/ViacomInc/packages/data-point/#hash-pickKeys
    */
    'hash:Species': {},

    /*
      Get List of Luke's starships full details

      Reuse entry:getLuke and through chain reducers get the details needed.
      Use collection mapping to map each starchip to a request:getStarShip.

      The result is an array of each of his starships with full details.
    */
    'entry:getLukeStarships': {},

    /*
      Make request to a starship's details API

      Same as request:getSpecies use StringTemplate to inject the url
    */
    'request:getStarShip': {},

    /*
      Get List of names of Luke's starships

      Folowing the form of entry:getLukeStarships, but you will use a Collection
      entity. This entity gives you more control over how you transform a list.

      Result is an array with the form of:
      [
        "X-wing",
        "Imperial shuttle"
      ]

      Collection Entity:
      https://github.com/ViacomInc/packages/data-point/#collection-entity
    */
    'entry:getLukeStarshipsNames': {},

    /*
      Resolve to list of names of starships

      Use Collection.map to map a request and get the key name of the result of
      the request.

      Collection.map:
      https://github.com/ViacomInc/packages/data-point/#collection-map
    */
    'collection:getSpaceShips': {},

    /*
      Get everyones's details from Star Wars Universe.

      Create a list of each person's details on the swapi api. for each person,
      show the name, birthYear, species and starship details with the following
      structure.

      {
        "birthYear": "19BBY",
        "name": "Luke Skywalker",
        "species": {
          "classification": "mammal",
          "language": "Galactic Basic",
          "name": "Human",
        },
        "starships": [
          "X-wing",
          "Imperial shuttle",
        ],
      }
    */
    'entry:AllPeople': {},

    /*
      Map a Person's details

      Use Hash.mapKeys to map the keys: name, birthYear, species, starships.
      Reuse the reducers you already implemented on previous entities to resolve
      the details of species and starships.

      This is the structure you want to end up with:

      {
        "birthYear": "19BBY",
        "name": "Luke Skywalker",
        "species": {
          "classification": "mammal",
          "language": "Galactic Basic",
          "name": "Human",
        },
        "starships": [
          "X-wing",
          "Imperial shuttle",
        ],
      }
    */
    'hash:PersonDetails': {}
  }
})

/**
 * Prints accumulator.value to the console.
 *
 * @param {Accumulator} acc - accumulator object
 * @return {Accumulator}
 */
function log (acc) {
  console.dir(acc.value, { depth: null })
  return acc
}

module.exports = {
  getPeople: () => {
    return dataPoint.transform('request:getPeople')
  },
  getLuke: () => {
    return dataPoint.transform('entry:getLuke')
  },
  getLukeBasicInfo: () => {
    return dataPoint.transform('entry:getPersonBasic')
  },
  getLukeSpeciesInfo: () => {
    return dataPoint.transform('entry:getLukeSpecies')
  },
  getLukeStarshipDetails: () => {
    return dataPoint.transform('entry:getLukeStarships')
  },
  getLukeStarshipNames: () => {
    return dataPoint.transform('entry:getLukeStarshipsNames')
  },
  getAllPeople: () => {
    return dataPoint.transform('entry:AllPeople').then(log)
  }
}
