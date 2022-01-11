console.log(Number('10'), typeof Number('10')); // явное
//1
console.log(+'50'); // Неявное
console.log(Number(+'50'), typeof Number(+'50'));
//2
console.log(Number('100'), typeof Number('100')); // явное
//3
console.log('' + 1); // неявное
console.log(String('' + 1), typeof String(''+1));
//4
console.log(String(1), typeof String(1)); // явное
//5
console.log(Boolean(0), typeof Boolean(0)); // явное
//6
console.log(+'001'); //неявное
console.log(Number(+'001'), typeof Number(+'001'));
//7
console.log(1 + ''); // неявное
console.log(String(1 + ''), typeof String(1 + ''));
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String(001)); // явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное


// Task 3.
console.log('\n*** TASK 3 ***')
console.log(String(console.log), Number(console.log), Boolean(console.log)); //1 Result. function log() { [native code] }, NaN, true

console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' })); //2 Result. [object Object], NaN, true

console.log(String(Symbol('key').toString()), Boolean(Symbol('key'))); //3 Result. Symbol(key) need to specify toString(), Symbol cant be converted into Number, true

console.log(String(Number), Number(Number), Boolean(Number)); //4. function Number() { [native code] } , NaN, true

console.log(String(''), Number(''), Boolean('')); //  ,0, false

console.log(String(0), Number(0), Boolean(0)); //0, 0, false

console.log(String(-10), Number(-10), Boolean(-10)); // -10, -10/ true

console.log(String('-105'), Number('-105'), Boolean('-105')); // -105, -105, true

// Task 4
console.log('\n*** TASK 4 ***')
// 1. NaN
console.log(Number(' 1 2 3 4 5'));
// 2. NaN
console.log(Number('1234 5'));
// 3. number 12345
console.log(Number('12345'));
// 4. string  'false'
console.log(String(false));
// 5. false
console.log(Boolean(0000000));
// 6. true
console.log(Boolean(0.0000001));
// 7. string 'undefined'
console.log(String(undefined));
// 8. NaN
console.log(Number('100f'));
// 9. number 100
console.log(Number('100'));
// 10. number 1
console.log(Number('000001'));