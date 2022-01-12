// Task 1
const myName = "Айнур";
const programmingLanguage = "JavaScript";
const courseCreatorName = "Владилен Минин";
const reasonText = "мне нравится работать с данными, красиво представлять их и сразу видеть свой результат";
const numberOfMonth = "приблизительно два";

let myInfoText = `Всем привет! Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}.

Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяца. Я уверен, что пройду данный курс до конца!`;

console.log(myInfoText);

// Task 2
myInfoText = myInfoText.replaceAll('JavaScript', 'JAVASCRIPT');
console.log(myInfoText);
console.log(myInfoText.length);
console.log(myInfoText[0], myInfoText[myInfoText.length - 1]);

// Task 3
let userName = prompt('Как вас зовут?');
userName = userName.trim().toLowerCase();
alert(`Вас зовут ${userName}`);

// Task 4
let userAge =  prompt("Сколько вам лет?");
// trim() is not required here
userAge = Number(userAge);
alert(`Вас зовут ${userName} и вам ${userAge} лет`);

// Task 5
const userString = prompt("Введите текст для обрезки");
const startSliceIndex = Number(prompt("Введите индекс, с которого нужно начать обрезку строки"));
const endSliceIndex = Number(prompt("Введите индекс, которым нужно закончить обрезку строки"));
const result = userString.trim().slice(startSliceIndex, endSliceIndex);
alert(`Результат: ${result}`);

// Task 6
let userText = prompt("Введите текст");
let wordFromText = prompt("Введите слово из текста");
userText = userText.trim();
wordFromText = wordFromText.trim();
const indexOfWord = userText.indexOf(wordFromText);
const result = userText.slice(0, indexOfWord);
alert(`Результат: ${result}`);
