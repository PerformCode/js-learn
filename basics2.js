var marks = Array(6)
var marks = new Array(1,2,3,4,5,6)
var marks = [10,20,30,40,50,60] //most effective

console.log(marks[3])

marks[3]=33

console.log(marks)
console.log(marks.length)
marks.push(70) //appends new element to the array
console.log(marks)

marks.pop() //deletes the last element
console.log(marks)

marks.unshift(1) // adds element at the beginning
console.log(marks)

console.log(marks.indexOf(50)) //returns index of a value in an array

console.log(marks.includes(120)) //check if a value is present in an array

submarks = marks.slice(2,5) //breaks the array excluding last index
console.log(submarks)

let total = marks.reduce((sum,mark)=>sum+mark,0) //returns summation of all elements in the array
console.log(total)

let even = marks.filter(mark=>mark%2==0) //returns only the even numbers in the array
console.log(even)

let doubleMarks = marks.map(mark=>mark*2) //maps each element of an array to a new array incuding some logic mentioned
console.log(doubleMarks)