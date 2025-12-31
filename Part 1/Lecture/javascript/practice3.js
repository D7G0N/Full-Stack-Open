console.log("Arrow Functions")

const sum = (p1, p2) => {
    console.log(p1, p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

//Cutting corners for a single parameter
const square = p => {
    console.log(p)
    return p * p
}

//Cutting corners for functions that are just a 
// return statement
const square2 = p => p * p
//this is what often gets fed to the array.map method

const t = [1, 2, 3]
const tSquared = t.map(p => p * p)
console.log(t, tSquared)

//non-arrow functions

function product(a, b) {
    return a * b
}

const average = function(a, b) {
    return (a + b) / 2
}

//but in this course, use arrow syntax.