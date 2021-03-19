let matrix = [
  [1, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 1]
]

let anotherMatrix = [
  [1, 0, 0, 0, 0, 9],
  [0, 1, 0, 0, 9, 0],
  [0, 0, 1, 9, 0, 0],
  [0, 0, 9, 1, 0, 0],
  [0, 9, 0, 0, 1, 0],
  [9, 0, 0, 0, 0, 1]
]

function reverseMatrix(matrix) {
  let resultMatrix = []
  for (let i = 0; i < matrix.length; i++) {
    let row = []
    for (let j = 0; j < matrix[0].length; j++) {
      row[j] = matrix[i][matrix[i].length - 1 - j]
    }
    resultMatrix.push(row)
  }
  return resultMatrix
}

console.log(reverseMatrix(matrix))
console.log(reverseMatrix(anotherMatrix))
