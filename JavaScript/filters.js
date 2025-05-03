let myNum = [1,2,3,4,5,6,7,8,9,10]

let numsss = myNum.filter( (function (num) {
    return num
}) )

// console.log(numsss);
// {} it is called a scope in a function

user = [
    {username:"arman",gender:"male",age:20 , active: true},
    {username:"user12",gender:"male",age:36 , active: false},
    {username:"user16",gender:"male",age:47 , active: false},
    {username:"user42",gender:"male",age:48 , active: false},
    {username:"user24",gender:"male",age:17 , active: false},
    {username:"user34",gender:"male",age:21 , active: false},
    {username:"user26",gender:"male",age:16 , active: false},
    {username:"lata",gender:"female",age:20 , active: true},
    ]

let activeUser = user.filter( (status) => {
    if (status.active === true && status.gender === "male") {
        return status
    }
} ) 

// activeUser = user.filter( (year) => year.age > 19 )

console.log(activeUser);
// console.log(userAge);
