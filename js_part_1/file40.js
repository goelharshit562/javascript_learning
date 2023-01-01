// Spread Operator

const arr1 = [1,2,3]
const arr2 = [5,6,7]

// const newarr = [...arr1,45,23,6,5,7,...arr2]

const newarr = [..."abc"]
console.log(newarr)

// spread operator in objects

const obj1 = {
    key1:"value1",
    key2:"value2"
}

const obj2 = {
    key3:"value3",
    key4:"value4"
}

const newobj = {...obj1,...obj2}
console.log(newobj)

