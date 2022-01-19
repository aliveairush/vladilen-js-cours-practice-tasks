// #JS.9.1 🚩
(function task1() {
  // Initial task data
  const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];
  // Какое думаю ожидается решение. Предполагается изменение начального массива
  // По заданию нужно alert() юзать, но думаю ничего страшного если будет console.log();
  const giveParcel = (personName, length) => {
    console.log(`${personName} получил(а) посылку. В очереди осталось ${length} человек`);
  }
  const leaveQueueWithoutParcel = (personName) => {
    console.log(`${personName} не получил(а) посылку и ушел(ла) из очереди`);
  }

  peopleWaiting.reverse(); // Мы собираемся удалить все элементы с начала до конца. Чтобы удаление было эффективным лучше удалять с конца
  // Step 1. Remove Kristina and Oleg
  giveParcel(peopleWaiting.pop(), peopleWaiting.length);
  giveParcel(peopleWaiting.pop(), peopleWaiting.length);
  // Step 2.
  giveParcel(peopleWaiting.pop());
  for (const personName of peopleWaiting) {
    leaveQueueWithoutParcel(personName);
  }

  // ➕ solution without removing items while iteration over array
  const peopleWaiting2 = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб'];

  const giveParcel2 = (personName, length) => {
    console.log(`${personName} получил(а) посылку. В очереди осталось ${length} человек`);
  }
  const leaveQueueWithoutParcel2 = (personName) => {
    console.log(`${personName} не получил(а) посылку и ушел(ла) из очереди`);
  }
  peopleWaiting2.forEach((personName, index, array) => index < 3 ? giveParcel2(personName, array.length - index - 1) : leaveQueueWithoutParcel2(personName));
  peopleWaiting2.length = 0; // Clear all data
}());


// #JS.9.2 🚩
(function task2() {
  const getSumOfSequence = (number) => {
    const array = [];
    for (let i = 1; i <= number; i++) {
      array.push(i);
    }
    return array[0] + array[number - 1];

    // Another way to fill up with the data
    // const newArray = [...Array(number)].map((item, index) => index + 1);
  };

  console.log(getSumOfSequence(5));
  console.assert(getSumOfSequence(5) === 6);
}());


// #JS.9.3 🚩
(function task3() {
  // Initial task data
  const coffees = ['Latte', 'Cappuccino', 'Americano'];

  const coffeeName = prompt('Поиск кофе по названию:', 'lAtte').trim();
  const coffeeNameIndex = coffees.findIndex(coffee => coffee.toLowerCase() === coffeeName.toLowerCase());

  if (coffeeNameIndex !== -1) {
    alert(`Держите ваш любимый кофе ${coffees[coffeeNameIndex]}. Он ${coffeeNameIndex + 1}-й по популярности в нашей кофейне.`)
  }
  else {
    alert('К сожалению, такого вида кофе нет в наличии');
  }
}());


// #JS.9.4 🚩
(function task4() {
  // Initial task data
  const coffees = ['Latte', 'Cappuccino', 'Americano'];
  const prices = [1.5, 1, 2];

  const updatedPrices = prices.map(price => price + 0.5);
  coffees.forEach((coffee, index) => console.log(`Кофе ${coffee} сейчас стоит ${updatedPrices[index]} евро`))
}());


// #JS.9.5 🚩
(function task5() {
  // Initial task data
  const clientsEstimations = [];

  const askClientToGiveEstimation = () => {
    const clientEstimation = Number(prompt("Как вы оцениваете нашу кофейню от 1 до 10?", "1"));

    if (clientEstimation > 0 && clientEstimation < 10) {
      clientsEstimations.push(clientEstimation);
    }
  }

  for (let i = 0; i < 5; i++) {
    askClientToGiveEstimation();
  }

  let goodEstimations = clientsEstimations.filter(estimation => estimation > 5).length;
  let notGoodEstimations = clientsEstimations.length - goodEstimations;

  alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)
}());


// #JS.9.6 🚩
(function task6(numbers) {
  // fori way
  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    res += numbers[i] ** 3;
  }
  console.log(`fori result = ${res}`);

  // for of
  res = 0;
  for (const number of numbers) {
    res += number ** 3;
  }
  console.log(`for of result = ${res}`);

  // forEach
  res = 0;
  numbers.forEach(number => res += number ** 3);
  console.log(`ForEach result = ${res}`);

  // reduce
  res = numbers.reduce((sum, number) => sum + number ** 3, 0);
  console.log(`Reduce result = ${res}`);
}([10, 4, 100, -5, 54, 2]));





