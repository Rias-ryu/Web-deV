let User = new Object()

User.id = 123
User.Acc = "new Acc"
User.Fullname = {firstname:"Arman",
    lastname:"patel"
}

// console.log(User.Fullname);

let obj1 = {a1:"a" , b1:"b"}
let obj2 = {a2:"a" , b2:"b"}

let obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

let obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);

console.log(obj4[1])

let tinderUser = {
    id : "123abc",
    name : "Arman",
    isLoggedIn : false,
}

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));

{
    name : "arman";
    lastname : "dummy";
    age : "20";
}

