/* --------------------------------
  Hello world

  Create a transform that resolves to
  "Hello World" string.

  Task:

  Create a function named sayHello
  that returns the string "Hello World"
-------------------------------- */

const DataPoint = require('data-point')

// create new DataPoint instance
const dataPoint = DataPoint.create()

function sayHello () {
  return 'Hello World'
}

function transform () {
  return dataPoint.transform(sayHello)
}

module.exports = {
  transform
}
