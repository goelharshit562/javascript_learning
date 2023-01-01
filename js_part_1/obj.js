// objects are refernce type

// create objects

const person = {name:"harshit",age:22}; // also called object literal
// console.log(person)

// console.log(person.name)

const emp = {
    name: "ayush",
    age: 22,
    hobbies: ["football","guitar","watch movies"]
}
// console.log(emp.hobbies[1])
emp.code = 110091
emp["sex"] = "Male"
// console.log(emp)

// console.log(emp["age"])

// difference between dot and bracket notation

const data = {
    name:"yash",
    age:22,
    "full detail": "very good person"
}

// we cannot use dot here becasue javascript dont handle sapce 
// console.log(data["full detail"])

const key = "dob"

data[key] = "12 january 2000"

// console.log(data)

// how to iterate object

// for in loops and object.Keys 

// for (let key in emp){
//     console.log(key)
// }

// for(let data in emp){
//     console.log(`${data} : ${emp[data]}`)
// }

console.log(Object.keys(emp))
const val = Array.isArray(Object.keys(emp))
console.log(val)