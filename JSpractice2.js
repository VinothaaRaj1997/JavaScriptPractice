// Arrays and its methods 
var marks = Array[6]
// 1) in object creation we can allocate the marks
var marks = new Array(20,30,40,50,60,70) // object creation of array
// 2) using square bracket 
var marks = [20,30,40,50,60,70]
console.log(marks)
console.log(marks[2])
marks[3] = 10  // it will replace index 3 value from 50 to 10
console.log(marks)
marks.push(80)  // it add a value at the last 
console.log(marks)
marks.pop(70) // we cant add any value inside the bracket, if we do, it wont remove the particular value it always removes the last value 
console.log(marks)
marks.pop()  // it removes the last value 
console.log(marks)
marks.unshift(100) // it add a value at front 
console.log(marks)
console.log(marks.indexOf(120)) // 120 is not exist in an array so it prints the index as '-1'
console.log(marks.indexOf(100))  // it prints the index of value 100
console.log(marks.includes(120)) //it checks 120 is present in an array or not, it prints true/false, 

// to iterate all the values in an array
for(var i=0; i<marks.length; i++)
{
    console.log(marks[i])
}

// to sum all the values in an array
sum = 0
for(var i=0; i<marks.length; i++)
{
    sum=sum+marks[i]
    console.log(sum) // if we print sum value here it will print the step by step addition
}
console.log(sum) // if we print here it will print overall addition 