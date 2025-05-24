//object is collection of properties

let person = {
    firstName: 'Rahul',
    lastName : 'Sarkar',
    fullName : function(){
        console.log(this.firstName + this.lastName)
    }
}

console.log(person) //prints the object

console.log(person.lastName) //Fetches the value by property
console.log(person['firstName']) //fecthes the value by key/index/property, as becasue the value is string, key is put inside '
console.log(person.fullName())

person.DOB = '10/23/1986' //adds a property
console.log(person)

person.city = 'Delhi'
console.log(person)

delete person.city //Deletes a property
console.log(person)

console.log('city' in person) //checks if property exists in the object

for(let key in person){
    console.log(person[key])
}