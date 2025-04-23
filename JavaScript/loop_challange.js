// let Tea = ['green tea' , 'black tea' , 'chai' , 'oolang tea']
// let SelectedTea = []
// let i = 0 ;
// for(i ; i < Tea.length ; i++){
//     if(Tea[i] == 'chai'){
//         break;
//     }
//     SelectedTea.push(Tea[i])
    
// }
// console.log(SelectedTea);

let Nodes = [1,2,3,4,5]
let VisitedNode = []
let i = 0;
for ( i = 0; i < Nodes.length; i++) {

    if (Nodes[i] === 4 ){
        continue;
    }

    VisitedNode.push(Nodes[i]);

}
// console.log(VisitedNode);

let number = [1,2,3,4,5]
let smallnumber = []
for (const num of number) {
    if (num === 4) {
        break;
    }
    smallnumber.push(num)
}
// console.log(smallnumber);

let teatypes = ['chai' , 'green tea' , 'black tea' , "herbal tea" , 'garam chai']
let preffredTea = []
for (const tea of teatypes) {
    if (tea === 'herbal tea') {
        continue
    }
    preffredTea.push(tea)
}
// console.log(preffredTea);

let population = {
    'bhilai':2000,
    'durg':4000,
    'raipur':8000,
    'balod':5000,
}
let region = {}
// console.log(Object.values(population));
//  call bind and apply
// console.log(Object.keys(population));
for (const city in population) {
    if (city === 'raipur') {
        continue
    }
    // console.log(population[city]);
    region[city] = population[city]
    
}
// console.log(region);

let citypopulation = {
    tokyo : 20000,
    kyoto : 50000,
    mumbai : 70000,
    bejing : 90000,
}
let largecity = {}

for (const city in citypopulation) {
   if (citypopulation[city] < 25000){
    continue;
   }
   largecity[city] = citypopulation[city]
}
// console.log(largecity);

let number5 = [1,2,3,4,5,6,7]
let numavail = []

number5.forEach((num) => {
    if (num === 4) {
        return
    }
    numavail.push(num)
});
// console.log(numavail);




let number6 = [9,8,7,6,5,4,3]
let usednumber = []

number6.forEach(numb => {
    if (numb === 6) {
        return
    }   
    usednumber.push(numb) 
});
// console.log(usednumber);

let numberss = [2,5,7,9]
let multinum = []
for (let i = 0; i < numberss.length; i++) {
    if (numberss[i] === 7) {
        continue
    }
   
    multinum.push((numberss[i]*2))
    
}
console.log(multinum);

let names = ['arman','shayan','tithi','reshmi']
let smallName = []

for (const naam of names) {
    if(naam.length > 5){
        continue
    }
    smallName.push(naam)
}
console.log(smallName);
