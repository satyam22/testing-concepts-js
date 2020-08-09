const {sum, sumAsync } = require('./sum')
const {test, expect } = require('./testing-library')

let result = sum(10,13)

let expected = 23

// if(result !== expected){
//   throw new Error(`sum(10,13) should be equal to ${expected}`)
// }

// sumAsync(10,13).then(result => {
//   if(result !== expected){
//     throw new Error(`sumAsync(10,13) should be equal to ${expected}`)
//   }
// }).catch(error => {
//   console.log('Error occured in sumAsync', error)
// })

test('sum(10,13)', ()=> {
  expect(result).toBe(expected)
})

