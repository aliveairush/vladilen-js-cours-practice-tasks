// Objects. Extra task #1  🚩
(function task1() {

  // Товары интернет-магазина
  const groceries = {
    "Orange Juice": {
      price: 1.5,
      discount: 10,
    },
    "Chocolate": {
      price: 2,
      discount: 0,
    },
  }

  const getTotalPriceOfShoppingBag = (shoppingBag = []) => {
    const totalPrice = shoppingBag.reduce((totalPrice, productInBag) => {
      const productInShop = groceries[productInBag.product];
      const productInBagPrice = productInShop.price * productInBag.quantity;
      const productInBagPriceAfterDiscount = productInBagPrice * ((100 - productInShop.discount) / 100);
      return totalPrice + productInBagPriceAfterDiscount;
    }, 0);

    return totalPrice.toFixed(2);
  }


  const shoppingBag = [
    {product: 'Chocolate', quantity: 3},
    {product: 'Orange Juice', quantity: 23},
  ]

  const totalPrice = getTotalPriceOfShoppingBag(shoppingBag);
  console.assert(totalPrice === '37.05'); // Возвращает 37.05
}());


function getRandomNumberInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Objects. Extra task #2  🚩
(function task2() {

  const startGame = (heroPlayer, enemyPlayer) => {
    let winner = null;
    let haveAWinner = false;

    while (!haveAWinner) {
      const randomNumber = getRandomNumberInRange(0, 1);
      if (randomNumber === 0) {
        const enemyHP = heroPlayer.heatEnemy(enemyPlayer);
        if (enemyHP <= 0) {
          winner = heroPlayer;
          haveAWinner = true;
        }
      }
      else {
        const heroHP = enemyPlayer.heatHero(heroPlayer);
        if (heroHP <= 0) {
          winner = enemyPlayer;
          haveAWinner = true;
        }
      }
    }

    console.log(`${winner.name} победил! У него осталось ${winner.health} здоровья`);
  }

  const hero = {
    name: 'Batman',
    health: 100,
    heatEnemy: enemy => enemy.health -= 10
  }

  const enemy = {
    name: 'Joker',
    health: 100,
    heatHero: hero => hero.health -= 10
  }

  startGame(hero, enemy);
}());


// Objects. task #3  🚩
(function task3() {

  const getKiller = (suspectInfo, deadPeople) => {
    for (const suspectName in suspectInfo) {
      const suspectSawPeopleList = suspectInfo[suspectName]
      const setSize = new Set([...suspectSawPeopleList, ...deadPeople]).size;
      // Если размер Set остался таким же после добавления deadPeople
      // значит все deadPeople входят в список людей которых видел подозреваемый
      if (setSize === suspectSawPeopleList.length) {
        return suspectName;
      }
    }
  }

  console.log("Killer is: ", getKiller(
    {
      'James': ['Jacob', 'Bill', 'Lucas'],
      'Johnny': ['David', 'Kyle', 'Lucas'],
      'Peter': ['Lucy', 'Kyle'],
    },
    ['Lucas', 'Bill']
  )); // Убийца James

  console.log("Killer is: ", getKiller(
    {
      'Brad': [],
      'Megan': ['Ben', 'Kevin'],
      'Finn': [],
    },
    ['Ben']
  )); // Убийца Megan

}());


// Objects. Extra task #4  🚩
(function task4() {
  const getWinner = (applicants, winnerObject) => {
    // Создаю массив имен участников лотереи
    const applicantNameList = Object.keys(applicants);
    // Беру имя случайного победителя из массива имен
    const winnerName = applicantNameList[getRandomNumberInRange(0, applicantNameList.length - 1)];
    // Создаю объект, состоящий из приза и по имени победителя достаю его объект из списка участников
    return {...winnerObject, ...applicants[winnerName]};
  }

  // Testing
  const winnerApplicants = {
    '001': {
      name: 'Максим',
      age: 25,
    },
    '201': {
      name: 'Светлана',
      age: 20,
    },
    '304': {
      name: 'Екатерина',
      age: 35,
    },
  }

  const resultWinner = getWinner(winnerApplicants, {
    prize: '10 000$',
  });
  console.log('resultWinner', resultWinner);
}());


// Date. Extra task #1  🚩
(function extraTask1Date() {

  const isPassportExpired = (expireDate) => {
    const [date, month, year] = expireDate.split(".");
    return Date.now() < new Date(year, month, date);
  }

  const allowVisa = (peopleWithVisa) => {
    return peopleWithVisa
      .filter(person => !person.criminalRecord)
      .filter(person => isPassportExpired(person.passportExpiration));
  }

  // Testing
  const peopleWithVisa = [
    {
      firstName: 'Stasia',
      lastName: 'Ward',
      criminalRecord: true,
      passportExpiration: '19.06.2023',
    },
    {
      firstName: 'Elliot',
      lastName: 'Baker',
      criminalRecord: false,
      passportExpiration: '04.06.2021',
    },
    {
      firstName: 'Leighann',
      lastName: 'Scott',
      criminalRecord: true,
      passportExpiration: '31.07.2022',
    },
    {
      firstName: 'Nick',
      lastName: 'Pop',
      criminalRecord: false,
      passportExpiration: '31.12.2021',
    },
    {
      firstName: 'Ainur',
      lastName: 'Japan',
      criminalRecord: false,
      passportExpiration: '31.12.2022',
    },
  ];

  const result = allowVisa(peopleWithVisa);
  console.log('result', result);
}());