/* eslint-env jest */

const Entities = require('./entities')

test.skip('it gets all the planets', () => {
  return Entities.getAllPlanets().then(acc => {
    expect(acc.value).toEqual([
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
    ])
  })
})

test.skip('it gets first planet', () => {
  return Entities.getFirstPlanet().then(acc => {
    expect(acc.value).toEqual({
      'id': 2,
      'name': 'Alderaan'
    })
  })
})

test.skip('it greets first planet', () => {
  return Entities.greetFirstPlanet().then(acc => {
    expect(acc.value).toEqual('Hello Alderaan!!')
  })
})

test.skip('it gets all planet names', () => {
  return Entities.getPlanetNames().then(acc => {
    expect(acc.value).toEqual([
      'Alderaan',
      'Yavin IV',
      'Hoth',
      'Dagobah',
      'Bespin'
    ])
  })
})

test.skip('get planet Alderaan info', () => {
  return Entities.getAlderaanInfo().then(acc => {
    expect(acc.value).toHaveProperty('name', 'Alderaan')
    expect(acc.value).toHaveProperty('rotation_period', '24')
  })
})

test.skip('get second planet info', () => {
  return Entities.getSecondPlanetInfo().then(acc => {
    expect(acc.value).toHaveProperty('name', 'Yavin IV')
    expect(acc.value).toHaveProperty('diameter', '10200')
  })
})

test.skip('get planet by index', () => {
  return Entities.getPlanetById(4).then(acc => {
    expect(acc.value).toHaveProperty('name', 'Hoth')
    expect(acc.value).toHaveProperty('diameter', '7200')
  })
  .catch(error => {
    console.log(error)
  })
})
