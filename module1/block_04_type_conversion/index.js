const name = 'Dipper';
const iq = 5;
const isDipperFictional = true;
const car = {name: "Porsche"};
const myFuture = undefined;
const myMoney = null;
const bigNumber = 100n;
const symbol = Symbol('id');

console.log(Number(name), Boolean(name), String(name));
console.log(Number(iq), Boolean(iq), String(iq));
console.log(Number(isDipperFictional), Boolean(isDipperFictional), String(isDipperFictional));
console.log(Number(car), Boolean(car), String(car));
console.log(Number(myFuture), Boolean(myFuture), String(myFuture));
console.log(Number(myMoney), Boolean(myMoney), String(myMoney));
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
console.log(Boolean(symbol), String(symbol.toString()));
