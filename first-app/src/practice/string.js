//Replace a part of a string with replace()
let example = "In a dishwasher far far away";
example = example.replace('dishwasher', 'galaxy')

console.log("Task 1: ", example)

//Reverse a String
const toBeReversed = ".eslaf eb t'ndluow ecnetnes siht ,dehctiws erew eslaf dna eurt fo sgninaem eht fI";
function reverseString(word) {
  word = word.split('')
  let reversedWord = word.reverse()
  return reversedWord.join('')
}
//return str.split("").reverse().join("");
console.log("Task 2: ", reverseString(toBeReversed));

// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url = "https//www.reddit.com/r/nevertellmethebots";
url = url.replace("bots", "odds")
url = url.substring(0, 5) + ":" + url.substring(5, url.length - 1)
console.log("Task 3: ", url);

// When saving this quote a disk error has occured. Please fix it!
// Insert the words "always takes longer than" between the words "It" and "you"!

let quote = "Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law."
let qouteArray = quote.split(' ')
for (let i = 0; i < qouteArray.length; i++) {
  if (qouteArray[i] === 'It') {
    qouteArray.splice(i + 1, 0, "always takes longer than")
    break
  }
}
quoteExtended = qouteArray.join(' ')
console.log("Task 4: ", quoteExtended);

let index = quote.indexOf("It")
newQuote = quote.substring(0, index + "It".length ) + " always takes longer than" + 
quote.substring(index + "it".length)
console.log("Task 4: ", newQuote)

let solution3 = quote.replace('It you', 'It always takes longer than you')
console.log("Task 4: ", solution3)
