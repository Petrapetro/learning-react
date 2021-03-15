['apple', 'pear', 'melon'].forEach((fruit, i) => console.log(fruit, i));

const triples = [1, 2, 3, 4, 5].map(number => number * 3);
console.log(triples); // [3, 6, 9, 12, 15]

const evens = [1, 2, 3, 4, 5].filter(number => number % 2 === 0);
console.log(evens); // [2, 4]

const isAllEven = [2, 6, 14, 5, 4].every(number => number % 2 === 0);
console.log(isAllEven); // false

const isAnyEven = [2, 6, 14, 5, 4].some(number => number % 2 === 0);
console.log(isAnyEven); // true

const letters = 'apple'.split('');
console.log(letters); // ['a', 'p', 'p', 'l', 'e']
console.log(letters.join('@')); // Worms in the apple!

// Exercises

//1.
// - Create a variable named `numbers`
//   with the following content: `[1, 3, 5, 7]`
// - Print the third element of `numbers`

let numbers = [1, 3, 5, 7]
numbers.forEach((num, i) => {i === 2 && console.log(num)})

//2.
// - Create a variable named `firstArrayOfNumbers`
//   with the following content: `[1, 2, 3]`
// - Create a variable named `secondArrayOfNumbers`
//   with the following content: `[4, 5]`
// - Log "secondArrayOfNumbers is longer" to the console if
//   `secondArrayOfNumbers` has more elements than `firstArrayOfNumbers`
// - Otherwise log: "firstArrayOfNumbers is the longer one"

let firstArrayOfNumbers = [1, 2, 3]
let secondArrayOfNumbers = [4, 5]

if(firstArrayOfNumbers.length > secondArrayOfNumbers.length) {
  console.log("firstArrayOfNumbers is the longer one")
} else {
  console.log("secondArrayOfNumbers is longer")
}

//3.
// - Create a variable named `numbers`
//   with the following content: `[54, 23, 66, 12]`
// - Print the sum of the second and the third element

let num3 = [54, 23, 66, 12]
console.log(num3[1] + num3[2])

//4.
// - Create a variable named `names` with the following content:
//   `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `names`

let names = ["Arthur", "Boe", "Chloe"]
let name1 = names[0]
let name2 = names[2]
names[0] = name2
names[2] = name1
console.log({names})

//5.
// - Create a variable named `numbers` with the following content: `[4, 5, 6, 7]`
// - Log each the element of `numbers` to the console*
// *hint: use a loop, console.log(numbers) won't cut it
// - bonus for using the correct built in array method

let num5 = [4, 5, 6, 7]
num5.forEach((num) => console.log(num))

//6. 
// - Create an array named `numbers` with the following content: `[1, 2, 3, 8, 5, 6]`
// - Change the value of the fourth element (8) to 4 with the `.map` method 
// - Print the fourth element as a test

let num6 = [1, 2, 3, 8, 5, 6]
num6.map((i) => {if (i === 3) { num6[i] = 4 }})
console.log(num6[3])

//7.
// - Create a variable named `numbers`
//   with the following content: `[1, 2, 3, 4, 5]`
// - Increment the third element simply by accessing it
// - Log the third element to the console

let num7 = [1, 2, 3, 4, 5]
num7[2]++
console.log(num7[2])

//8.
// - Create a variable named `animals`
//   with the following content:
//   `["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
//     "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]`
//
// - Add all elements an `"a"` at the end
// - try to use built in functions instead of loops

let animals = ["koal", "pand", "zebr", "anacond", "bo", "chinchill", "cobr", "gorill",
  "hyen", "hydr", "iguan", "impal", "pum", "tarantul", "pirahn"]
        
  animals.forEach((animal, i) => { animals[i] = animal + "a" })
  console.log({ animals })

//9.
// - Create an array variable named `drinks` with the following content:
//   `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of
//   a loop
// - It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`