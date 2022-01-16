/**
 Task. Extra +
 */

const alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя";

/**
 * Функции для выполнения задания 2-4.
 */

/**
 * Функция генерирует кол-во символов левее или правее letter символа.
 * doGenerateBefore - если true то генерация левее символа, если false то правее
 */
function generateStringAroundLetter(letter, lengthToGenerate, doGenerateBefore = false) {
  lengthToGenerate = Number(lengthToGenerate); // Явно преобразуем в число сколько нужно символов
  let generatedStrResult = ''; // Результирующая строка
  let letCharCode = alphabet.indexOf(letter);
  if (doGenerateBefore) { // Если нужно генерировать слева.
    const difference = letCharCode - lengthToGenerate;

    if (difference < 0) { // Если разница между позицией числа и кол-вом нужных символов меньше 0.
      //  Берем с конца  алфавита кол-во элементов равных разнице, и также с 0 позиции до самой буквы.
      generatedStrResult += alphabet.slice(difference);
      generatedStrResult += alphabet.slice(0, letCharCode);
    } else { // Иначе берем с алфавита начиная с позиции разницы до позиции самой буквы.
      generatedStrResult += alphabet.slice(difference, letCharCode)
    }
  } else { // Если нужно генерировать справа.
    // Поскольку элеметов может быть больше чем длинна алфавита, нужно создать алфавит достаточной длинны
    const repeatedAlphabet = alphabet.repeat(Math.floor(lengthToGenerate / alphabet.length + 2));
    // Из repeatedAlphabet вырезаем нужное кол-во элеметов при помощи substr()
    generatedStrResult += repeatedAlphabet.substr(letCharCode + 1, lengthToGenerate);
  }
  return generatedStrResult;
}


function isCharANumber(char) {
  return char >= '0' && char <= '9'
}

function taskPart2to4(text) {
  let resultText = '';
  let lastDigitPos = -1;

  for (let i = 0; i < text.length; i++) {
    const curChar = text[i]; // Текущий символ
    const currentCharIndex = alphabet.indexOf(curChar);

    if (lastDigitPos !== -1 && !isCharANumber(curChar)) { // Если до этого шла цифра. И текущий символ не цифра.
      const lastNumber = +text.slice(lastDigitPos, i); // Вырезаем последнее число
      if (lastNumber < 10) { // Если число меньше 10. Добавляем к итоговой строке сгенерированную строку
        resultText += generateStringAroundLetter(curChar, lastNumber, true);
        lastDigitPos = -1;
        // Обратите внимание что текущий символ добавится позже
      } else { // Иначе добавляем сначала текущий символ и добавляем к итоговой строке сгенерированную строку и пропускаем итерацию
        resultText += curChar;
        resultText += generateStringAroundLetter(curChar, lastNumber, false);
        lastDigitPos = -1;
        continue
      }
    }

    if (curChar === curChar.toUpperCase() && !isCharANumber(curChar)) { // Если текущий сивол прописная буква и Не Число
      resultText += alphabet[alphabet.length - 1 - currentCharIndex];
    } else if (isCharANumber(curChar)) { // Иначе если текущий символ число

      if (i === text.length - 1) { // Если это последняя итерация.
        const lastResultSymbol = resultText[resultText.length - 1];
        // Если до этого не шло число, то генерируем строку размера текущего символа , иначе генерируем строку размером равным последнему числу
        resultText += ((lastDigitPos === -1) ?
          generateStringAroundLetter(lastResultSymbol, curChar, false)
          : generateStringAroundLetter(lastResultSymbol, text.slice(lastDigitPos), false));
      }
      if (lastDigitPos === -1){ // Если до этого не шло число
        lastDigitPos = i; // Сохраняем позицию цифры для следующей итерации, чтобы было понятно когда начилось число
      }
    } else {  // В остальных случаях добавляем символ (Сюда попадают строчные символы)
      resultText += curChar;
    }
  }
  return resultText;
}


/**
 * Функции для выполнения задания 5.
 */
function isCloseToEachOther(char1, char2) {
  const char1Index = alphabet.indexOf(char1);
  const char2Index = alphabet.indexOf(char2);
  const lastCapIndex = alphabet.indexOf('Я')
  // Проверяем яв-ся ли в нашем алфавите char2 соседом справа от char1 И то что char1 не является буквой "Я"(потому что у нее не может быть соседа )
  return (char1Index + 1 === char2Index) && !(char1Index === lastCapIndex);
}

function taskPart5(str, seqLength) {
  console.log(`\nИсходная строка ${str}. Длина подстрок необходимых найти ${seqLength}`)
  let curSeqCounter = 1; // CurrentSequenceCounter. Счетчик последнего слова (минимум 1 потому что буква как минимум 1 будет)
  let capitalLetterSeqTotal = 0; // Сколько раз встречались подстроки прописных букв размером в указанный параметр seqLength
  let smallLetterSeqTotal = 0; // Сколько раз встречались подстроки строчных букв размером в указанный параметр seqLength

  for (let i = 0; i < str.length; i++) {
    const curChar = str[i];
    if (isCloseToEachOther(curChar, str[i + 1])) { // Если текущая и следующая за ней буква стоят рядом
      curSeqCounter++; // Увеличиваем счетчик текущего слова
    }
    else { // Иначе значит идущий список алфавитной строки остановился
      if (curSeqCounter === seqLength ) { // Если счетчик подстроки равен нужной длине подстроке
        // Если текущий символ Заглавная буква то увеличиваем счетчик прописных подстрок иначе увеличиваем счетчик строчный подстрок
        ( curChar ===  curChar.toUpperCase()) ? capitalLetterSeqTotal++ : smallLetterSeqTotal++;
      }
      curSeqCounter = 1; // Обнуляем счетчик
    }
  }
  console.log(`Количество подстрок с ${seqLength} подряд идущими символами в нижнем регистре:  ${smallLetterSeqTotal}`)
  console.log(`Количество подстрок с ${seqLength} подряд идущими символами в верхнем регистре:  ${capitalLetterSeqTotal}`)
  return capitalLetterSeqTotal + smallLetterSeqTotal; // В ответ возвращаем сумму найденных подстрок
}

const userString = prompt("Введите строку состоящую  из маленьких/больших русских букв и цифр в перемешку")
const processedString = taskPart2to4(userString);
const searchSubStringSeqNumber = Number(prompt(`После шагов 1-4 результат: ${processedString},\n введите число какой длины подстроки нужно искать?`));
const result = taskPart5(processedString, searchSubStringSeqNumber);
alert(`Всего нашлось подстрок такой длинны ${result}!`)

/*
  Tests чтобы убедится что все корректно отрабатывает
 */

// Проверка верно ли работает функция хэлпер generateStringAroundLetter() обособленно
console.assert(generateStringAroundLetter("В", 3, true) === 'яАБ');
console.assert(generateStringAroundLetter("В", 3, false) === 'ГДЕ');
console.assert(generateStringAroundLetter("Я", 3, true) === 'ЬЭЮ');
console.assert(generateStringAroundLetter("Я", 3, false) === 'абв');
console.assert(generateStringAroundLetter("а", 3, true) === 'ЭЮЯ');
console.assert(generateStringAroundLetter("б", 3, true) === 'ЮЯа');
console.assert(generateStringAroundLetter("я", 3, true) === 'ьэю');
console.assert(generateStringAroundLetter("а", 10, false) === 'бвгдеёжзий');
console.assert(generateStringAroundLetter("я", 10, false) === 'АБВГДЕЁЖЗИ');
console.assert(generateStringAroundLetter("А", 10, false) === 'БВГДЕЁЖЗИЙ');


// Тесты taskPart2to4 обработка подстроки
console.assert(taskPart2to4('а') === 'а');
console.assert(taskPart2to4('аб') === 'аб');
console.assert(taskPart2to4('В') === 'э');
console.assert(taskPart2to4('Аб') === 'яб');
console.assert(taskPart2to4('аБ') === 'аю');
console.assert(taskPart2to4('АЯ') === 'яа');
console.assert(taskPart2to4('В3') === 'эюяА');
console.assert(taskPart2to4('3В') === 'яАБэ');
console.assert(taskPart2to4('та4г') === 'таЯабвг' );
console.assert(taskPart2to4('б1г') === 'бвг');
console.assert(taskPart2to4('б10а') === 'бабвгдеёжзий');
console.assert(taskPart2to4('3АгА3') === 'эюяягяАБВ');
console.assert(taskPart2to4('10АгА10') === 'АБВГДЕЁЖЗИЙгяАБВГДЕЁЖЗИ');



// Тесты поиска подстрок
console.assert(taskPart5('а', 1) === 1);
console.assert(taskPart5('аа', 1) === 2);
console.assert(taskPart5('ааа', 1) === 3);
console.assert(taskPart5('а', 2) === 0);
console.assert(taskPart5('аб', 2) === 1);
console.assert(taskPart5('аба', 1) === 1);
console.assert(taskPart5('аба', 2) === 1);
console.assert(taskPart5('абаб', 2) === 2);
console.assert(taskPart5('АБВ', 3) === 1);
console.assert(taskPart5('АБВБ', 3) === 1);
console.assert(taskPart5('АБабАБ', 2) === 3);
console.assert(taskPart5('абвабв', 3) === 2);
console.assert(taskPart5('АБвГДабГДЕ', 1) === 1);
console.assert(taskPart5('АБвГДабГДЕ', 2) === 3);
console.assert(taskPart5('АБвГДабГДЕ', 3) === 1);
console.assert(taskPart5('АБвГДабГДЕ', 4) === 0);


// Тесты для метода хелпера, убедится что он корректно отрабатыавет
console.assert(isCloseToEachOther("а", "б") === true);
console.assert(isCloseToEachOther("б", "а") === false);
console.assert(isCloseToEachOther("б", "в") === true);
console.assert(isCloseToEachOther("в", "б") === false);
console.assert(isCloseToEachOther("А", "Б") === true);
console.assert(isCloseToEachOther("Б", "А") === false);
console.assert(isCloseToEachOther("Я", "а") === false);



/*   Пункты 2-4. Первая рабочая версия, без рефакторинга.
Также в ней есть дефект не учитвается буква Ё.


const alphabet = "АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдежзийклмнопрстуфхцчшщъыьэюя";

function generateStringAroundLetter(letter, number, isLastNumber) {
  let resStr = '';
  let letCharCode = letter.charCodeAt();
  let letCleanCode = letCharCode - 'А'.charCodeAt();
  if (number < 10 && !isLastNumber){
    const posCharCodeFromAlphabetRight = Math.abs(letCleanCode - alphabet.length);
    for (let i = 0; i < number; i++) {
      let trueNextValue = alphabet.length - posCharCodeFromAlphabetRight - number + i;
      let add = alphabet[ (alphabet.length + trueNextValue) % alphabet.length];
      resStr += add;
    }
  } else {
    for (let i = 0; i < number; i++) {
      let trueNextValue = letCleanCode + i + 1;
      let addedLetterPos =  trueNextValue % alphabet.length;
      let add = alphabet[addedLetterPos];
      resStr += add;
    }
  }
  return resStr;
}


function taskPart2to4(inputText) {
  const lastLetterLowerCase = "я".charCodeAt(0);
  const firstLetterLowerCase = "А".charCodeAt(0);
  let resultText = '';
  let lastDigitPos = -1;

  for (let i = 0; i < inputText.length; i++) {
    const letter = inputText[i];
    if (lastDigitPos !== -1 && !(letter >= '0' && letter <= '9')) {
      const number = +inputText.slice(lastDigitPos, i);
      if (number < 10) {
        const generatedText = generateStringAroundLetter(letter, number);
        resultText += generatedText;
        lastDigitPos = -1;
      } else {
        resultText += letter;
        const generatedText = generateStringAroundLetter(letter, number);
        resultText += generatedText;
        lastDigitPos = -1;
        continue
      }
    }

    if (letter >= 'А' && letter <= 'Я') {
      const diff = letter.charCodeAt(0) - firstLetterLowerCase;
      const edited = String.fromCharCode(lastLetterLowerCase - diff);
      resultText += edited;
    } else if (letter >= '0' && letter <= '9') {
      if (lastDigitPos === -1) {
        if (i === inputText.length - 1) {
          resultText += generateStringAroundLetter(resultText[resultText.length - 1], +letter, true);;
        }
        lastDigitPos = i;
      } else if (i === inputText.length - 1 && lastDigitPos !== -1) {
        const number = +inputText.slice(lastDigitPos, inputText.length);
        resultText += generateStringAroundLetter(resultText[resultText.length - 1], number);
      }
    } else {
      resultText += letter;
    }
  }
  return resultText;
}
 */

/*
Самое первое решение без рефакторинга для решения части 5

// function task5(str, seqLength){
//   let curSeqCounter = 1; // CurrentSequenceCounter. Счетчик последнего слова
//
//   let capitalLetterSeqTotal = 0; // Сколько раз встречались подстроки прописных букв размером в указанный параметр seqLength
//   let smallLetterSeqTotal = 0; // Сколько раз встречались подстроки строчных букв размером в указанный параметр seqLength
//
//   for (let i = 0; i < str.length; i++) {
//     const curChar = str[i];
//     // debugger
//     if (isCloseToEachOther(str[i], str[i+1])){
//       curSeqCounter++;
//       if (curSeqCounter > seqLength){
//         continue
//       }
//     } else {
//       if (curSeqCounter === seqLength && i < str.length){
//         capitalLetterSeqTotal++;
//         if (curChar === curChar.toUpperCase()){
//           capitalLetterSeqTotal++;
//         } else {
//           smallLetterSeqTotal++;
//         }
//       }
//       curSeqCounter = 1;
//     }
//   }
//   return capitalLetterSeqTotal;
// }

 */