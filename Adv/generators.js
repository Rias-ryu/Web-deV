function* generatorfunc(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let gen = generatorfunc();
let gen2 = generatorfunc();

// console.log(generatorfunc.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);
console.log(gen2.next().value);

