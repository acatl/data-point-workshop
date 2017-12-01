/* eslint-env jest */

const Reducers = require('./reducers')

test.skip('it gets all the planets', () => {
  return Reducers.getPlanets().then(acc => {
    expect(acc.value).toEqual([
      {
        id: 2,
        name: 'Alderaan'
      },
      {
        id: 3,
        name: 'Yavin IV'
      },
      {
        id: 4,
        name: 'Hoth'
      },
      {
        id: 5,
        name: 'Dagobah'
      },
      {
        id: 6,
        name: 'Bespin'
      }
    ])
  })
})

test.skip('it gets first planet', () => {
  return Reducers.getFirstPlanet().then(acc => {
    expect(acc.value).toEqual({
      id: 2,
      name: 'Alderaan'
    })
  })
})

test.skip('it greets first planet', () => {
  return Reducers.greetFirstPlanet().then(acc => {
    expect(acc.value).toEqual('Hello Alderaan!!')
  })
})

test.skip('it gets all planet names', () => {
  return Reducers.getPlanetNames().then(acc => {
    expect(acc.value).toEqual([
      'Alderaan',
      'Yavin IV',
      'Hoth',
      'Dagobah',
      'Bespin'
    ])
  })
})

test.skip('it sorted planets', () => {
  return Reducers.sortPlanets().then(acc => {
    expect(acc.value).toEqual([
      'Alderaan',
      'Bespin',
      'Dagobah',
      'Hoth',
      'Yavin IV'
    ])
  })
})

test.skip('get planet info', () => {
  return Reducers.getPlanetInfo().then(acc => {
    expect(acc.value).toHaveProperty('name', 'Alderaan')
    expect(acc.value).toHaveProperty('rotation_period', '24')
  })
})
