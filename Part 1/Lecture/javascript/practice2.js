console.log("Objects")

const object1 = {
    name: 'Artoo Deetoo',
    age: 32,
    education: "Navigation",
}

//this is a javascript "object". It looks to me like a dictionary

const nest = {
    names: {
        first: "Seethree",
        last: "Pioh",
    },
    material: "Metal",
    age: 12,
    languages: ["Basic", "Huttesse"],
}

console.log(object1.name)
const feildName = "age"
console.log(nest[feildName])

object1.address = 'Space'
object1['secret number'] = 12341 //properties with a " " cannot be accessed or assigned with dot notation

console.log(object1.address)

/**
 * Objects can also have methods and "constructor functions"-ish. 
 * So I guess they aren't really dictionaries
 * They're more like classes, then?
 * 
 * JS doesn't have true classes, as it isn't a object-oriented language
 */

