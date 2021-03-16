// Create a method that find the 5 most common lottery numbers in lottery.csv

const fs = require('fs')
const lottery = fs.readFileSync('./lottery.csv', 'utf8').toString().split("\n")
let lotteryMap = new Map()

lottery.forEach((row) => {
  row = row.split(';')
  row = row.slice(row.length - 5)
  row[row.length - 1] = row[row.length - 1].substring(0, 2)
  row.forEach((num) => {
    if (lotteryMap.has(num)) {
      lotteryMap.set(num, lotteryMap.get(num) + 1)
    } else {
      lotteryMap.set(num, 1)
    }
  })
})
const sortedMap = [...lotteryMap.entries()].sort((a, b) => { return b[1] - a[1] })
const result = sortedMap.slice(0, 5)
console.log(result)