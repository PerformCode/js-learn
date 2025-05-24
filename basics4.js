let day = 'wednesday '
console.log(day.length) // spcae is also counted a a character

console.log(day.slice(2,6)) //to get a substring of the string
console.log(day[4]) //get a chatacyet at an index

let spltStr = day.split("e") //splits the string at the mentioned character

console.log(spltStr[2].trim()) //trim to remove space at the end of wednesday, 2 is becasue the string is split into 3 substrings, with index as 0,1,2

let date = '23'
let nextDate = '27'
let diff = parseInt(nextDate) - parseInt(date) //buffering values from browser like date returns the value in string format, which cannot be used for calculation, they need to be converted to int using parseInt

diff.toString() //converts integer back to string

let quote = day + "is Jupiter's day"

console.log(quote)

let pos = quote.indexOf("day") //returns index of first character of the string being searched
console.log(pos)

let pos1 = quote.indexOf("day", 7) //returns index of first character of the string being searched after index 6
console.log(pos1)

let count =0 //counts no of occurunces of day in quote
while(pos!== -1){
    count++
    pos = quote.indexOf("day",pos+1)
}

console.log(count)