// Functions. Extra task #1  🚩
(function funcTask1() {
  const checkQuestionAnswer = (question, correctAnswer) => {
    const userAnswer = prompt(question).trim();

    if (userAnswer.toLowerCase() === correctAnswer.  toLowerCase()) {
      alert('Ответ верный');
    }
    else {
      alert('Ответ неверный')
    }
  }

  checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
  checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
  checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');
}());


// Functions. Extra task #2  🚩
(function funcTask2() {
  const showSuccessMessage = (message) =>  console.log(message);
  const showErrorMessage = (message) => console.error(message);

  const checkTextOnErrorSymbol = (text, errorSymbol, successCallback, errorCallback) => {
    const errorsIndexes = text.split("").reduce((array, letter, letterIndex) => {
      letter === errorSymbol && array.push(letterIndex);
      return array;
    }, []);

    if (errorsIndexes.length !== 0) {
      errorsIndexes.forEach(errorIndex => errorCallback(`Найден запрещенный символ "${text[errorIndex]}" под индексом ${errorIndex}.`))
    }
    else {
      successCallback('В данном тексте нет запрещенных символов');
    }
  }

  const text = 'Привет! Как дела! Давно мы с тобой не виделись.';
  checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);
}());


// Arrays. Extra task #1  🚩
(function arraysTask1() {
  const goals = [8, 1, 1, 3, 2, -1, 5]; // Initial data

  // Найти Самый результативный матч по количеству голов
  const maxGoal = Math.max(...goals);
  const maxGoalIndex = goals.indexOf(maxGoal);
  console.log(`Самый результативный матч был под номером ${maxGoalIndex + 1}. В нем было забито ${maxGoal} гол(ов).`);

  // Найти Самые нерезультативные игры
  const minGoal = Math.min(...goals.filter(goal => goal >= 0));
  goals.forEach((goal, index) => {
    goal === minGoal && console.log(`Самые нерезультативные матчи были под номерами ${index + 1}. В каждом из них было забито по ${goal} мячу(а).`)
  });

  // Найти. Общее количество голов за сезон.
  const totalNumberOfGoals = goals.reduce((totalGoals, goal) => goal > 0 ? totalGoals + goal : totalGoals);
  console.log(`Общее количество голов за сезон равно ${totalNumberOfGoals}`);

  // Найти Были ли автоматические поражения
  console.log(`Были автоматические поражения: ${goals.includes(-1) ? 'Да' : 'Нет'}`)

  // Найти Среднее количество голов за матч
  const gamesWithoutAutoLose = goals.filter(goal => goal >= 0);
  const averageGoalsInMatch = Math.floor(gamesWithoutAutoLose.reduce((avg, goal) => {
    return avg + goal / gamesWithoutAutoLose.length;
  }, 0));

  console.log(`Среднее количество голов за матч равно ${averageGoalsInMatch}`);

  // Отсортируйте голы в порядке возрастания
  const sortedArray = goals.slice().sort((goal1, goal2) => goal1 - goal2);
  console.log(sortedArray);
}());


// Arrays. Extra task #2  🚩
(function arraysTask2() {
  const getMathResult = (expressions) => {
    if (expressions.length < 3) return 'Ошибка';

    // Finding Sign, if not exist return Error
    const allMathSigns = ['>', '<', '=', '+', '-', '*', '/'];
    const sign = expressions.find(item => allMathSigns.includes(item));
    if (!sign) return 'Ошибка';

    // Finding Operands if last one does not exist return Error
    const [operand1, operand2] = expressions.filter(item => !isNaN(item));
    if (!operand2) return 'Ошибка';

    // Creating array of math functions // By the way in this task Map would be perfect
    const checkIsGreaterThan = (a, b) => a > b;
    const checkIsLessThan = (a, b) => a < b;
    const checkIsEqualTo = (a, b) => a === b;
    const plus = (a, b) => a + b;
    const minus = (a, b) => a - b;
    const multiply = (a, b) => a * b;
    const divide = (a, b) => a / b;
    const allMathMethods = [checkIsGreaterThan, checkIsLessThan, checkIsEqualTo, plus, minus, multiply, divide]

    // Getting index of required math function
    const signIndex = allMathSigns.indexOf(sign);
    // Calling needed function with casting them to numbers
    return allMathMethods[signIndex](+operand1, +operand2);
  }

  console.assert(getMathResult([]) === 'Ошибка');
  console.assert(getMathResult(['1', '**', 1]) === 'Ошибка');
  console.assert(getMathResult([1, 1, 1, 1, 1]) === 'Ошибка');
  console.assert(getMathResult(['1', '**']) === 'Ошибка');
  console.assert(getMathResult(['100\', \'hello\', \'javascript\', undefined, \'help200', '+', 4]) === 104);
  console.assert(getMathResult(['200', '+', 300]) === 500);
  console.assert(getMathResult(['20', '-', '5']) === 15);
  console.assert(getMathResult([100, '/', 100]) === 1);
  console.assert(getMathResult([2, '-', 2]) === 0);
  console.assert(getMathResult(['5', '>', '10']) === false);
  console.assert(getMathResult(['5', '<', '10']) === true);
  console.assert(getMathResult(['1', '=', 1]) === true);
}());


// Arrays. Extra task #3  🚩
(function arraysTask3() {
  const matrix = new Array(3);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = [];
    for (let j = 0; j < 5; j++) {
      matrix[i][j] = j + 1;
    }
  }

  // Another way
  const matrix2 = [...new Array(3)].map(() => [...new Array(5)].map((elem, i) => i + 1));

  console.log(matrix);
  console.log(matrix2);
}());

// Arrays. Extra task #4  🚩
(function arraysTask4() {
  const matrix = [ // Initial data
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
  ];

  // Convert the matrix to an array
  const array = matrix.reduce((arr, item) => arr.concat(item));
  console.log(array);
}());