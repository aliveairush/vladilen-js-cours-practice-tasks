// #JS.8.1 🚩
function getName1(name) {
  return `Имя равно ${name}`;
}

const getName2 = (name) => {
  return `Имя равно ${name}`;
}

const getName3 = (name) => `Имя равно ${name}`;

console.log(getName1('Function Declaration'));
console.log(getName2("Function Expression"));
console.log(getName3("Arrow Function Expression"));


// #JS.8.2 🚩
const getSumOfNumbers = (number, type = 'odd') => {
  let res = 0;
  const increment = type ? 2 : 1; // Если type пусто то увеличивать на индекс цикла на 1 иначе на 2
  const indexInitialValue = type === 'odd' ? 1 : 0; // Если нечетное то изначальное значение 1 иниче 0
  for (let i = indexInitialValue; i <= number; i += increment) {
    res += i;
  }
  return res;
}

console.log(getSumOfNumbers(10, 'odd'));
console.log(getSumOfNumbers(10, 'even'));
console.log(getSumOfNumbers(10, ''));
console.assert(getSumOfNumbers(10, 'odd') === 25);
console.assert(getSumOfNumbers(10, 'even') === 30);
console.assert(getSumOfNumbers(10, '') === 55);


// #JS.8.3 🚩
const getDivisorsCount = (number = 1) => {
  if (!Number.isInteger(number) || number < 0) {
    alert("number должен быть целым числом и больше нуля!");
    return 0;
  }

  let divisorsCount = 0;
  for (let i = 1; i <= number; i++) {
    divisorsCount += number % i === 0;
  }
  return divisorsCount;
}

console.assert(getDivisorsCount(4) === 3);
console.assert(getDivisorsCount(5) === 2);
console.assert(getDivisorsCount(12) === 6);
console.assert(getDivisorsCount(30) === 8);