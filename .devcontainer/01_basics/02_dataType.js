// Data Types in JavaScript

// 1. Primitive Data Types
//Symbol
const num1 = Symbol('123')
const num2 = Symbol('123')

console.log(num1 === num2) // false, because the value of Symbol is unique

// BigInt
const bigNum = 648379182309019764n
// NUMBER
const a = 10
const b= 10.9
//null
const c = null
//undefined
let d 
//boolean
const e = true
//string
const str = "hello"

// 2. Non-Primitive Data Types(Reference Data Types)

// array
const fruits = ["apple", "mango", "banana"]

//object 
let myObj = {
    name: "anushka",
    age: 20,
    city: "kanpur"
}

// stack(primitive) and heap(non-primitive) memory allocation

let name1 = "anushka"
let name2 = name1
console.log(name1) ;

name2 = "vishwakarma"
console.log(name1) // anushka
console.log(name2) // vishwakarma

let userOne = {
    name: "raj",
    age: 20
}
let userTwo = userOne
userTwo.name = "rajat"
console.log(userOne.name) //rajat
console.log(userTwo.name);//rajat
// because userOne and userTwo are pointing to the same object in memory


 


