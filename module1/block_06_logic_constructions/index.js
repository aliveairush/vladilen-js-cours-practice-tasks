// Task 1
const existedUserLogin = "the_best_user";
const existedUserPassword = "12345678";

const userLogin = prompt("Введите логин")
  .trim();
const userPassword = prompt("Введите пароль")
  .trim();

userLogin === existedUserLogin && userPassword === existedUserPassword ?
  alert(`Добро пожаловать, ${userLogin}!`) :
  alert(`Логин и (или) Пароль введены неверно!)`);

// Task 2
let correctAnswers = 0;
let incorrectAnswers = 0;

function mathTest(question, answer){
  if(+prompt(question) === answer ){
    alert("Ответ Верный");
    correctAnswers++;
  } else {
    alert("Ответ Неверный");
    incorrectAnswers++;
  }
}

mathTest("Сколько будет 2 + 2?", 4);
mathTest("Сколько будет 2 * 2?", 4);
mathTest("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?", 1);
mathTest("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?", 12);
mathTest("Сколько будет 2 + 2 * 2?", 6);

alert(`Конец теста! Правильные ответы - ${correctAnswers}; Неправильные ответы - ${incorrectAnswers}.`);

// Task 3 in package "confirm"

// Task 4
function someFunction(){
  let newStudent = prompt('Введите имя нового студента!');
  newStudent = newStudent.trim();
  if (newStudent) {
    alert(`Добро пожаловать, ${newStudent}!`)
  }
}

// while cycle
let i = 0;
while (i < 3) {
  someFunction();
  i++;
}

// do while cycle
i = 0;
do {
  someFunction();
  i++;
} while (i < 3);


// Task 5
let sum = 0;
for (let l = 100; l > 0; l--){
  sum += l;
}

alert(sum);