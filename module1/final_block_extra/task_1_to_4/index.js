// 🚩 Task 1
(function task1() {
  for (let i = 1937; i >= 1016; i--) {
    const isDivisibleOn3and7 = i % 3 === 0 && i % 7 === 0;
    const isNotDivisibleOn2and5 = i % 2 !== 0 && i % 5 !== 0;

    if (isDivisibleOn3and7 && isNotDivisibleOn2and5) {
      console.log("Winning ticket is: ", i); // Answer 1911
      return i;
    }

  }
}());


// 🚩 Task 2
console.assert(isEqualSymbols('адрес', 'среда') === true) // true
console.assert(isEqualSymbols('ааб', 'ба') === true) // true
console.assert(isEqualSymbols('ааб', 'бас') === false) // false
console.assert(isEqualSymbols('аабс', 'ааа') === false) // false
console.assert(isEqualSymbols('ааа', 'аабс') === false) // false
console.assert(isEqualSymbols('ноутбук', 'программист') === false) // false

function isEqualSymbols(str1, str2) {
  const map = new Map();

  // Добавляем все элементы в Мap, чтобы остались только уникальные символы
  str1.split("").forEach(letter => {
    map.set(letter, false);
  });


  let doReturnFalse = false; // Флаг, который отвечает нужно ли будет после проверки возвращать false или нет

  str2.split("").forEach(letter => {
    if (map.has(letter)) {   // Проверка что в мапе находятся все символы из второй строки.
      map.set(letter, true); // Если символ есть в обоих строках, то установка значения в мапе как true
    }
    else { // Если в мапе не было символа из второй строки значит можно возвращать false
      doReturnFalse = true;
    }
  });

  if (doReturnFalse) {
    return false;
  }

  // Проверка все ли символы из первой строки были использованы
  return [...map.values()].every(val => val);
}


// 🚩 Task 3
const unique = (array) => Array.from(new Set(array));

console.log("TASK 3", unique([1, 1, 2, 2, 4, 2, 3, 7, 3])) // => [1, 2, 4, 3, 7]


// 🚩 Task 4
const isPalindrome = (str) => str === str.split("").reverse().join("");

console.assert(isPalindrome('racecar') === true) // true
console.assert(isPalindrome('programmer') === false) // false
