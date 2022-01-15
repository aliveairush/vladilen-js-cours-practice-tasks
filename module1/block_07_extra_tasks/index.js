// String methods
// Task 1.
let javaScriptDescription = "JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.";

javaScriptDescription = javaScriptDescription.slice(0, Math.floor(javaScriptDescription.length / 2))
  .replaceAll('а', 'А') // Russian A
  .replaceAll('a', 'A') // English A
  .replaceAll(' ', '')
  .repeat(3);
javaScriptDescription = javaScriptDescription[Math.floor(javaScriptDescription.length / 2)];
console.log(javaScriptDescription);

// Logic constructions
// Task 1.
let clientName = "Игорь";
let clientSpentForAllTime = 110;

function buy(clientSpentToday) {
  let discount = 0;
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10;
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20;
  } else if (clientSpentForAllTime >= 500) {
    discount = 30;
  }
  if (discount > 0) {
    console.log(discount);
    clientSpentToday *= (100 - discount) / 100;
    clientSpentForAllTime += clientSpentToday;
    alert(`Вам предоставляется скидка в ${discount}%!`);
  }
  alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
}

buy(100);

// Task 2
function getNumberValuePrompt(message, errorMessage) {
  let inputValue;
  while (true) {
    inputValue = +prompt(message);
    if (isNaN(inputValue) || inputValue <= 0) {
      alert(errorMessage);
    } else {
      return inputValue;
    }
  }
}
const errorMessage = 'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом!';

clientName = prompt("Введите имя клиента").trim();
let clientSpentToday = getNumberValuePrompt("Сколько клиент потратил сегодня?", errorMessage);
clientSpentForAllTime = getNumberValuePrompt("Сколько клиент потратил за все время?", errorMessage);

buy(clientSpentToday);


// New Test 3
const capitalLetters = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯABCDEFGHIJKLMNOPQRSTUVWXYZ";

function validatePassword(inputText) {
  const textLength = inputText.length;

  // Длина пароля должна быть минимум 3 символа и не больше 20 символов (включая 20).
  if (!(textLength >= 3 && textLength <= 20)) return false;

  // Пароль должен содержать минимум 1 прописную (большую) букву.
  let validFlag = false;
  for (let i = 0; i < textLength; i++) {
    const ch = inputText[i];
    if (capitalLetters.includes(ch)){
      validFlag = true;
      break;
    }
  }
  if (!validFlag) return validFlag;

  // Пароль должен содержать минимум 1 цифру.
  validFlag = false;
  for (let i = 0; i < textLength; i++) {
    const ch = inputText[i];
    if (ch >= '0' && ch <= '9' ){
      validFlag = true;
      break;
    }
  }
  return validFlag;
}

console.assert(validatePassword("1234f") === false);
console.assert(validatePassword("123456") === false);
console.assert(validatePassword("1234F") === true);
console.assert(validatePassword("12") === false);
console.assert(validatePassword("JavaScript") === false);
console.assert(validatePassword("JavaScript123") === true);

const password = prompt('Введите пароль');
if (validatePassword(password)) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert("Пароль не удовлетворяет условиям!")
}


/* Test 3. Прошлая версия. Забракована. Необходимо использовать изученные методы и логические конструкции

function validateInput(inputText) {
  if (!(inputText.length >= 3 && inputText.length <= 20)) return false;
  if (!/\d/.test(inputText)) return false;
  return /[A-ZА-Я]/.test(inputText);
}

const password = prompt('Введите пароль');
if (validateInput(password)) {
  alert("Пароль валидный. Добро пожаловать в аккаунт!");
} else {
  alert("Пароль не удовлетворяет условиям!")
}
 */