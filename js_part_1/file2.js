// Push -> to push the element in the array

// Pop -> remove element from ending of an Array

// Unshift -> add element is starting of an Array

// Shift -> remove element from starting of An Array

// primitive vs reference data types

// how to clone array

// how to concatenate two array

let arr1 = ['yash','deepak','rohan']
let array1 = ["neesha","kerti",'laxmi']
let array2 = array1
console.log(array1===array2)
array2[1]="deeksha"
console.log(array1)
console.log(array2)

//clone

// let arr2 = arr1.slice(0)
// let arr2 = [].concat(arr1);

//spread operator
let arr2 = [...arr1]

console.log(arr1===arr2)
console.log("ARRAY ONE",arr1)
console.log("ARRAY TWO",arr2)