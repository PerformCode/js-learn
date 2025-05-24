const Person2 = require('./basics6')

class Pet extends Person2
{
    constructor(firstName,lastName)
    {
        //if a parent class has a constructor, it is mandatory to call the parent class constructor as below
        super(firstName,lastName)
    }

    get city()
    {
        return 'Kennel'
    }
}

let pet = new Pet("Miel","Nandi")

console.log(pet.fullName())
console.log(pet.city)