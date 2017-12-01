/* eslint-env jest */

const HelloWorld = require('./hello-world')

test.skip('it says hello', () => {
  return HelloWorld.transform().then(acc => {
    expect(acc.value).toEqual('Hello World')
  })
})
