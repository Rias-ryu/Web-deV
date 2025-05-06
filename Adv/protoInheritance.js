function Person(name) {
    this.name = name
}

Person.prototype.greet = function(){
    console.log(`hello , i am ${this.name}`);
    
}

let arman = new Person("arman");
arman.greet()

