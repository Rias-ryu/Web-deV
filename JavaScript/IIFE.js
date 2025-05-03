(function add(a,b){
    // named IIFE
    return console.log(a+b);
})(4,5);

(   
    // Unnamed IFFE
    (name) => {
        console.log(
        `Hello mister ${name}`)
    }
)("arman")