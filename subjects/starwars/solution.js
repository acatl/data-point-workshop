const dataPoint = require('data-point').create({
  entities: {
    /*
      Get all the people from the star wars universe
    */
    'request:getPeople': {
      url: 'https://swapi.co/api/people/'
    },

    /*
      Get first person (result) from request:getPeople
    */
    'entry:getLuke': {
      value: 'request:getPeople | $results[0]'
    },

    /*
      Get a Person's basic information
    */
    'entry:getPersonBasic': {
      value: ['entry:getLuke', 'hash:PersonBasic']
    },

    /*
      Get a person's basic information
    */
    'hash:PersonBasic': {
      mapKeys: {
        name: '$name',
        birthYear: '$birth_year',
        species: '$species',
        starships: '$starships'
      }
    },

    /*
      Get Luke's species details
    */
    'entry:getLukeSpecies': {
      value: [
        'entry:getLuke',
        '$species[0]',
        'request:getSpecies',
        'hash:Species'
      ]
    },

    /*
      Fetch a url using the value passed.
    */
    'request:getSpecies': {
      url: '{value}'
    },

    /*
      Pick the keys name, language, classification from the value recevied.
    */
    'hash:Species': {
      pickKeys: ['name', 'language', 'classification']
    },

    /*
      Get List of Luke's starships full details.
    */
    'entry:getLukeStarships': {
      value: ['entry:getLuke', '$starships', 'request:getStarShip[]']
    },

    /*
      Make request to a starship's details API.
    */
    'request:getStarShip': {
      url: '{value}'
    },

    /*
      Get List of names of Luke's starships.
    */
    'entry:getLukeStarshipsNames': {
      value: ['entry:getLuke', '$starships', 'collection:getSpaceShips']
    },

    /*
      Resolve to list of names of starships.
    */
    'collection:getSpaceShips': {
      map: ['request:getStarShip', '$name']
    },

    /*
      Get everyones's details from Star Wars Universe.
    */
    'entry:AllPeople': {
      value: ['request:getPeople', '$results', 'hash:PersonDetails[]']
    },

    /*
      Map a Person's details.
    */
    'hash:PersonDetails': {
      mapKeys: {
        name: '$name',
        birthYear: '$birth_year',
        species: ['$species[0]', 'request:getSpecies', 'hash:Species'],
        starships: ['$starships', 'collection:getSpaceShips']
      }
    }
  }
})

/**
 * Prints accumulator.value to the console.
 *
 * @param {Accumulator} acc - accumulator object
 * @return {Accumulator}
 */
// function log (acc) {
//   console.dir(acc.value, { depth: null })
//   return acc
// }

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
    return dataPoint.transform('entry:AllPeople')
  }
}
