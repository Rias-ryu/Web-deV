function Person (Name , Age){
    this.Name = Name,
    this.Age = Age
}

let Arman = new Person("arman" , 20 )
// console.log(Arman.Name);

console.log();

function idea(invention){
    this.invention = invention
}

Person.prototype.Speak = function (last) {
    this.last = last
    return `My Name is ${this.last}`
}

// console.log(Arman.Speak("hello"));

Array.prototype.Arman = function () {
    return `custom method ${this}`
}

let MyArray = [1,2,3,4]
// console.log(MyArray.Arman());

let MyArray1 = [1,2,3,4,5,6]
// console.log(MyArray1.Arman());

// inheritance

class Vehicle {
    constructor(make,model){
        this.make = make
        this.model = model
    }

    start(){
        return ` ${this.model} is a car of ${this.make}`
    }
}

class car extends Vehicle {
    drive(){
        return`this is an example of in heritance ${this.make} , ${this.model}`
    }
}

let mycar = new car("maruti",'omni')

// console.log(mycar.drive());
// console.log(mycar.start());


let vehicle1 = new Vehicle("mercedes", "AMG ONE")
// console.log(vehicle1);


// Encapsulation
class BankAccount{
    #balance = 0;

    deposit(amount){
        this.#balance += amount
    }
    display(){
        return  ` $ ${this.#balance}`
    } 
}

// let Acc56 = new BankAccount()
// Acc56.deposit(6789)
// console.log(Acc56.display());

// Acc56.deposit(6789)
// console.log(Acc56.display());

// Abstraction

class Ferrari{
    Key(){
        // complex system check
        // Engine Diagnostics
        return `All check lights are gone....`
    }
    turnTheKey(){
        // Starter Power
        // engine turning 
        return `Car is now Truned on`
    }
    CarOn(){
        let check1 = this.Key()
        let check2 = this.turnTheKey()
        return `${check1} ${check2}`
    }
}

let sf90 = new Ferrari()
// console.log(sf90.Key());
// console.log(sf90.turnTheKey());
// console.log(sf90.CarOn());


// Polymorphism

class Bird{
    
    fly(){
        return `Flying .....`
    }
}

class penguin extends Bird{

    fly(){
        return `Penguins can't fly... `
    }

}

let Tom = new Bird();
let Jerry = new penguin();

// console.log(Tom.fly());
// console.log(Jerry.fly());

// Static Method

class calculator{
    static add(a,b){
        return a+b
    }
}

let minicalc = new calculator();
console.log(calculator.add(2,3));


//  Getters And Setters

class Employee {
    #Salary
    constructor(Name,Salary){
        if (Salary < 0) {
            console.log("Invalid Value");
            
        }
        this.Name = Name
        this.#Salary = Salary
    }

    get Salary(){
        return `no Views Allowed`
    }

    set Salary(value){
        if (value < 0){
            console.log("Invalid Value");
        }
        else{
            this.#Salary = value
        }
    }

}

let Emp1 = new Employee("Alice",-7500)
console.log(Emp1.Salary);
Emp1.Salary = -7500
