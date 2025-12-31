const x = 1     /*cannot be changed*/
let y = 5       /*normal variable*/
/* there is also var c = 6, but that does 
strange things with scope*/

console.log(x, y)   /*prints to the debug console, not the terminal in vscode*/
y += 10
console.log(x, y)
y = "sometext"      /*changing datatype is legal!*/
console.log(x, y)
/*x = 4               /*error*/

const t = [1, -1, 3]    /*can't changing WHICH array t is pointing to,
                        but you can change the CONTENTS of that array*/
console.log(t)
t.push(5)           /*push appends a value to the end of the array*/
console.log(t)
console.log(t.length)
console.log(t[1])   /*indexing starts at 0*/

console.log("For Loop:")
t.forEach((value) => {
    console.log(value)
})
/**.foreach() takes a function defined with arrow syntax */


console.log("Immutable Arrays")
/**But when using React, keep things immutable */
const t1 = [1, -1, 3] 
const t2 = t1.concat(5) // Creates a new array
console.log(t1, t2)

const m1 = t1.map(value => value * 2)   //creates a new array based on an element-wise function
console.log(t1, m1) 

const m2 = t1.map(value => '<li>' + value + '</li>')
//oh this is very useful
console.log(m2)

console.log("De-Structuring")
const t3 = [1, 2, 3, 4, 5]
const [first, second, ...rest] = t3
//well thats a funny way of indexing
console.log(first, second)
console.log(rest)