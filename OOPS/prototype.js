let GenericCar = {
    tyre : 4,
    SeatBelt : "Yes",
};
let Suzuki = {
    Engine : 1.5,
    Sunroof : "no",
    // __proto__ : GenericCar,
};

// console.log(Suzuki.__proto__);
let Mahindra = {
    engine : '2 liter',
    power : "55pis"
};

Object.setPrototypeOf(Mahindra,GenericCar)

console.log(Mahindra , Object.getPrototypeOf(Mahindra));



