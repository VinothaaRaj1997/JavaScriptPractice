console.log("Hello World")
// data types - var, (let, const - from ES6)
var a = 10
console.log(a)
console.log(typeof(a))

var a = 2.34   // variables can be redeclare and reassign in var 
console.log(a)
console.log(typeof(a))  // op=number  it will print the type of the value 

// let a = 3          // variables can't be redeclare in let, but can reassign 
// console.log(a)

let b = "vino"
console.log(b)
b="Java"           // variables can be reassign in let 
console.log(b)
console.log(typeof(b)) //op= string 

const c = true
//const c = false
//c=false      we can't reassign and redeclare const variable 
console.log(c)
console.log(typeof(c))

let e = null
console.log(e)
console.log(typeof(e))

u=       //if e dont assign any values to the variable then that returns 'undefined' datatype.
console.log(typeof(u))

n=null
console.log(typeof(n))

// can I use any assignment operators on these values? - yes
let d =12
const f= a+d  //if a has two values, it takes the first 'a' value
console.log(f)

console.log(!c)  // not(!) operator will change the value into opposite. eg-true to false  

//Loops and conditions in JS
// 1. while loop:
// i) if we dont give increment operator :
// let i = 0
/* while(i<10)
 {
     console.log("i am inside loop") // it will print this line infinite times, bz no increment operator given so condition wont be false.
 } */

// ii) if we give increment operator :
let j = 0
while(j<10)
{
    console.log(j) // it will print o/p still condition become false
j++
}


// eg:3 while loop
let l=0
while(l>10)  // here condition is false so it will never go inside the loop 
{
    l++    
    console.log(l)
}
console.log("******")

// eg:4 while loop
//the while loop used to evaluate any kind of expresssion as condition 
// but whereas for loop- it just run 'n' rumber of times 
// if we want to repeat loop based upon some condition evaluation that if it become true or false then choose while loop 
let required= true
while(required)
{
    console.log(required)
    required= false
}

// 2. do-while loop:

let k = 0
do
{
    k++     // here loop is execute first ever the condition is false 
}
while(k>10);
{
    console.log(k)
}


// 3. for loop:
for(let x=0; x<=10; x++)
{
    console.log(x)
}

//  let required = true
//  for(let z=0; required; z++)      // if we use for loop for this condition it will completely broke 
//  {
//     console.log(z)  // o/p- 1,2,3.......infinite 
//  }

console.log("print mutiples of 2 & 5")
// to print the numbers which are common multiples of 2 & 5:
for(let n=1; n<=10; n++)
{
    if(n%2==0 && n%5==0)
    {
        console.log(n)
    }
}

console.log("print mutiples of 2 or 5")
for(let m=1; m<=10; m++)
{
    if(m%2==0 || m%5==0)
    {
        console.log(m)
    }
}

// print the common multiples of 2 & 5 upto 30
console.log("common multiples of 2 & 5 upto 30")

let count = 0
for(let num=1; num<=100; num++)
{
    if(num%2==0 && num%5==0)
    {
        count++
        console.log(num)
        if(count==3)
        break
    }
}
 // to get sub-array from the main array 
 console.log("sub-array from the main array")
 var marks = [20,30,40,50,60,70]
 subMarks = marks.slice(2,5)   // from 2nd index to 4th index only be printed, it won't print 5th index
 console.log(subMarks)