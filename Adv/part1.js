console.log("Arman");

function greet(){
    console.log("say hello");
    
}

setTimeout(()=>{
    greet()
},4000)


for (let i = 0; i < 6; i++) {
    console.log(i);   
}


console.log("hello arman ");


// Asyncronous JavaScript

function Outer(){
    let counter = 4 
    return function(){
        counter ++
        return counter
    }
}

let increment = Outer()
console.log(increment());
