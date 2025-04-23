// let teaFlavours = ["Green tea" , "oolong tea" , 'black tea'];
// let teaFl = teaFlavours[1,2];
// console.log(teaFl);

// let teaTypes = ['masala chai' , 'adrak chai' , 'black tea'];
// console.log(teaTypes);
// teaTypes[1] = 'white tea';
// console.log(teaTypes);

// cities = ['mumbai' , ' delhi' , 'bhilai'];
// console.log(cities);
// cities.push("durg");
// console.log(cities);

let FavFood = ['egg','rice','omlette'];

// let myfood = [...FavFood];
// FavFood.pop()
// console.log(FavFood);
// console.log(myfood);

let array1 = ['paris' , 'rome']
let array2 = ['tokyo','bangkok']
// let array3 = [array1+array2];
// console.log(typeof array3);
let array3 = array1.concat(array2);
// console.log(array3);

let menu = ['chicken' , 'chai' , 'rice' , 'greenTea'];

let menulenght = menu.length;
// console.log(menulenght);



let number = [1,2,3,4,5];

let isNumberinArr = number.includes(3);
// console.log(isNumberinArr);
number.reverse();
// console.log(number);


let arr = [1,2,3,4];
// console.log(arr.indexOf(3));

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }
// console.log();
let sum = 0;
let i = 0;
for(i=0;i<=5;i++){
    sum += i
}
// console.log(sum);

// let countdown = [];
// let j = 5;
// while (j > 0) {
//     countdown.push(j)
//     j--
// }
// console.log(countdown);

// let teaCollection = [];
// let tea;

// do{
//     tea = prompt(`Enter your favourite Tea (type "STOP" to finish)`)
//     if (tea !== "STOP")
//     {
//         teaCollection.push(tea)
//     }
// }
// while (tea !== "STOP")
// console.log(teaCollection);

// console.log();


// let total = 0;
// let x = 1;

// do {
//     total += x
//     x++
// }
// while (x <= 3)
// console.log(total);

let MultipliedNumber = []
let number1 = [2,4,6]
let y = 0;
let temp

for(y ; y < number1.length ; y++ ){
    // temp = number1[y]*2;
    // MultipliedNumber.push(temp)

    MultipliedNumber.push((number1[y]*2))
}
console.log(MultipliedNumber);

let cities = ['bhilai' , ' durg' , ' riapur' , 'nagrnar']
let c = 0
let citiesVisited = []
let citiesVisited1 = []
let citiesVisited2 = []
let list
for(c ; c < cities.length ; c++) {
    citiesVisited.push((list = cities[c]))
    citiesVisited.unshift((list = cities[c]))
    citiesVisited.shift((list = cities[c]))
}
console.log(citiesVisited);
console.log(citiesVisited1);
console.log(citiesVisited2);


