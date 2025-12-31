const artoo = {
    name: "Artoo Deetoo",
    age: 32,
    education: "Navigation",
    greet: function() {
        console.log("beep boop " + this.name)
    },
    doAddition: function(a, b) {
        console.log(a + b)
    },
}

artoo.growOlder = function() {
    this.age += 1
}

artoo.greet()
console.log(artoo.age)
artoo.growOlder()
console.log(artoo.age)

artoo.doAddition(1, 4)

const referanceToAddition = artoo.doAddition
referanceToAddition(10, 15) //oh thats weird

const referanceToGreet = artoo.greet
referanceToGreet() //looses all the object data (definition of 'this')
//this sucks, so don't use "this"

setTimeout(artoo.greet, 1000) //also looses "this"
setTimeout(artoo.greet.bind(artoo), 1000) //solves the problem with jank!

//also arrow functions can't use "this" at all