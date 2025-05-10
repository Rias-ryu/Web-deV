// function greet(name){
//     return `Hello ${name}`
// }

// let grett = greet("arman")

// console.log(grett);

// function makeTea (TypeOfTea) {
//     return `Making Tea ${TypeOfTea}`
// }

// let Tea = makeTea("lemon Tea")
// console.log(Tea);

// function TeaOrder () {
//     function confirmOrder(){
//         return `order confirmed for Tea`
//     }
//     return confirmOrder()
// }

// let order = TeaOrder("masala chai")
// console.log(order);

// const calculateTotal = (price , quantity) => 
//     price*quantity
// let total = calculateTotal(499,100)
// console.log(total);

function testone (){
    console.log(this);
    
}
// testone()

const testtwo = () => {
    console.log(this);
    
}
// testtwo()
function makeTea(fn1){
    return `maketea: ${fn1}`
}

function processTeaOrder(fn) {
    return fn("hello ")
}

let order1 = processTeaOrder(makeTea)

// console.log(order1);

function teaMaker (score) {
    let score1 = 102
    return function(teaTYpe){
        return `m0aking ${teaTYpe} ${score} ${score1}`
    }
}

let tea = teaMaker("Arman")
console.log(tea("chai"));

let result = tea("garam chai")
console.log(result);
