// Array : Basic array methods 
const arr = [1,2,3,'vino']
arr.push(4) // it will add an element at last 
arr.unshift(0) // it will add an element at first 
arr.pop() // it will remove the last element 
arr.shift() // it will remove the first element 
console.log(arr)
for(const item of arr) // iteration 
console.log(item)
console.log(arr.at(2)) // prints particular index value 
let arr1 = [9,8,7,'raj']
console.log(arr.concat(arr1)) // concatinate 2 arrays 
//console.log(arr1.copyWithin(2,0))
// some other array methods: map, filter, reduce, concat, slice, splice 
//console.log(arr1.entries()) //returns an Array Iterator object with key/value pairs
 
const ages = [32, 33, 16, 40];

console.log(ages.every(checkAge))  //The every() method executes a function for each array element.The every() method returns true if the function returns true for all elements.
//The every() method returns false if the function returns false for one element. The every() method does not execute the function for empty elements.
function checkAge(age) {
  return age > 18;
}

const fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.fill("Kiwi", 2, 4))
console.log(fruits.fill("Kiwi"))

const ag = [32, 33, 16, 40];
console.log(ag.filter(checkAdult)) //The filter() method creates a new array filled with elements that pass a test provided by a function.
function checkAdult(age) {
  return age >= 18;
}

