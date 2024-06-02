'use strict';

/** Constructor function 

const Person = function (firstName, birthYear) {
    * !!! Instance Properties 
    this.firstName = firstName;
    this.birthYear = birthYear;
}

* !!! Instances of Person 

const festus = new Person('Festus', 2002)
console.log(festus)
console.log(festus instanceof Person)

!!! Prototype 
Person.prototype.calcAge = function () {
    console.log(2024 - this.birthYear)
}

festus.calcAge()
console.log(festus.__proto__.__proto__)
console.log(Person.prototype === festus.__proto__)
console.log(Person.prototype.isPrototypeOf(festus))
console.log(festus.hasOwnProperty('firstName'))

* !!! Object Oriented Programming (OOP) 
* !!! Coding challenge #1
* !!! todo 1: Use a constructor function to implement a 'Car'. A car has a 'make' and a 
'speed' property. The 'speed' property is the 
current speed of the car in km/h
* !!! todo 2: Implement an 'accelerate' method that
will increase the car's speed by 10, and log the
new speed to the console
* !!! todo 3: Implement a 'brake' method that will decrease the car's speed by 5, and log 
the new speed to the console
* !!! todo 4: Create 2 'Car' objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them 
!!! Test data:
- Data car 1: 'BMW' going at 120 km/h
- Data car 2: 'Mercedes' going at 95 km/h




function Car(make, speed) {
    this.make = make
    this.speed = speed
}

const car1 = new Car("BMW", 120)
console.log(car1)

!!! Creating new method called accelerate !!!
Car.prototype.accelerate = function () {
    this.speed += 10;
    console.log(this.speed)
}

car1.accelerate()


!!! Creating new method called Brake !!!
Car.prototype.brake = function () {
    this.speed -= 5
    console.log(this.speed)
}
car1.brake()

const car2 = new Car("Mercedes", 95)
console.log(car2)

* !!! Class expression
const PersonCl = class{}

*!!! Object.create() --> class
const PersonProto = {
    calcAge(){
        console.log(2037 - this.birthYear)
    },

    * !!! creating an object of sarah --> Instances
    init(firstName, birthYear){
        this.firstName = firstName
        this.birthYear = birthYear
    }
}

* !!! creating an object of steven --> Instances
const steven = Object.create(PersonProto)
steven.firstName = "Steven"
steven.birthYear = 1999
steven.calcAge()

* !!! creating an object of sarah --> Instances
const sarah = Object.create(PersonProto)
sarah.init("Sarah", 1987)
sarah.calcAge()




* !!! Coding challenge #2
* todo 1: Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
* todo 2: Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
* todo 3: Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
* todo 4: Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
* Test data:
- Data car 1: 'Ford' going at 120 km/h
GOOD LUCK 😊


class CarCl {
    constructor(make, speed) {
        this.make = make;
        this.speed = speed
    }

    accelerate() {
        this.speed += 10
        console.log(`${this.make} going at ${this.speed} km/h`)
    }

    brake() {
        this.speed -= 5;
        console.log(`${this.make} going at ${this.speed} km/h`)
    }

    get speedUS() {
        return this.speed / 1.6
    }

    set speedUS(speed) {
        this.speed = speed * 1.6
    }
}

* Creating a new instance of a car
const ford = new CarCl("Ford", 120)
ford.accelerate()
ford.brake()
ford.speedUS = 150
ford.accelerate()
console.log(ford.speedUS)

*/