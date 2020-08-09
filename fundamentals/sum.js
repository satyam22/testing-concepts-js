const sum = (a,b) => a+b

const sumAsync = (a,b) => new Promise(resolve => {
  setTimeout(()=> {
    resolve(sum(a,b))
  },3000)
})

module.exports = {
  sum,
  sumAsync
}