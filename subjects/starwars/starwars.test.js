/* eslint-env jest */

const starwars = require('./starwars')

test.skip('should request all people', function () {
  return starwars.getPeople().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should request luke', function () {
  return starwars.getLuke().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should get lukes basic info', function () {
  return starwars.getLukeBasicInfo().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should get luke details with species info', function () {
  return starwars.getLukeSpeciesInfo().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should get lukes details with starships', function () {
  return starwars.getLukeStarshipDetails().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should get lukes details with starships names', function () {
  return starwars.getLukeStarshipNames().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})

test.skip('should get all people', function () {
  return starwars.getAllPeople().then(acc => {
    expect(acc.value).toMatchSnapshot()
  })
})
