function Person(Name , Age) {
    this.Name = Name
    this.Age = Age

}

function Car(Year , Brand) {
    this.Year = Year
    this.Brand = Brand
}

let MyCar = new Car(2022 , "suzuki")
// console.log(MyCar);

let MyNewCar = new Car(2020 , "Mercedes")
// console.log(MyNewCar);

let Arman = new Person("arman",20)
// console.log(Arman);

function Laptop (Model , brand){
    this.Model = Model,
    this.brand = brand,
    this.functions = function() {
        return `this is a laptop of ${brand} and ${Model}`
    }
}
let mylaptop = new Laptop("erty567","Dell")
// console.log(mylaptop.functions());

function Animal(Species , Sounds){
    this.Species = Species
    this.Sounds = Sounds
}

Animal.prototype.sound = function () {
    return `${this.Species} makes the Sound of ${this.Sounds}`
}

let cow = new Animal("Cow","Moo")
let cat = new Animal("Cat","Meow")

console.log(cow);
console.log(cow.sound());

console.log();

console.log(cat);
console.log(cat.sound());


function Drink(DrinkName) {
    if (!new.target) {
        throw new Error("New Keyword is Not Present");
    }
    this.DrinkName = DrinkName
}

let MyDrink = new Drink('Water')
let NewDrip = new Drink("lemonade")


