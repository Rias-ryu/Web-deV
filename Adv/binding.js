let Person = {
    name : "arman",
    greet(){
        console.log(`this is a person Named ${this.name}`);
        }
}

// Person.greet();

// let nonBinded = Person.greet
// nonBinded()

// let greetFunction = Person.greet.bind({name:"Lata"})
// greetFunction()


function getEmail(){
    return this.email = `${this.firstName}${this.lastName}${this.age}@test.com`
}


let student = {
    firstName : "Lata",
    lastName : "Rani",
    age : 19, 
    // email.this :
}

let teacher = {
    firstName: "Arman",
    lastName : "Patel",
    Subject : "CS",
    age : 20,
}

console.log(getEmail.call(student));
console.log(getEmail.call(teacher));

function subject(sub) {
    return this.subject = [sub]
}

let check = getEmail.bind(student)

console.log(subject.apply(student , ["maths","science","physics"]));
console.log(student);
console.log(teacher);

console.log(check);


