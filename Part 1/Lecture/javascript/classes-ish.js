class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log("hello, my name is " + this.name)
    }
}
//this is just a template for an object,
// whose type will remain "object"

const adam = new Person("Adam Bible", 888)
adam.greet()

const bingus = new Person("Bingus Blorbus", 2)
bingus.greet()

//we will use none of this in the course, and will use hooks instead

//also beware of bad javascript tutorials. 
//Stick to Mozilla and javascript.info