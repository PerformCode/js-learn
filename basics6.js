module.exports = class Person
{
    age = 25 //It's a class property
    get city() //getter method, it's treated as a propoerty
    {
        return 'Delhi'
    }

    // following is a constructor, constructor is method which executes by default when an object of the class is created
    constructor(firstName, lastName)
    {
        this.firstName=firstName //this extends the scope of the property from constructor to all of class to be used
        this.lastName=lastName //It's an instance property
    }

    fullName() //function
    {
        console.log(this.firstName+" "+this.lastName)
    }
}

// let person = new Person("Rahul","Dev")

// console.log(person.age)
// console.log(person.city)
// person.fullName()
