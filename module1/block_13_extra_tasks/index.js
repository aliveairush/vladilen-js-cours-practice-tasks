// "this" keyword. Extra task #1  🚩
(function task1() {
  const attacker = {
    archer: 30,
    footSoldier: 55,
    cavalry: 10,
    artillery: 3,

    checkChancesToWin(defenderObject) {
      let chanceToWin = 0;
      let maximumChances = 0;

      Object.keys(this).forEach(key => {
        if (typeof this[key] === "function") return; // Нет смысла обрабатывать если значение это функция

        if (this[key] > defenderObject[key]) { // Если значение текущего объекта больше значения вражеского объекта
          chanceToWin++;
        }
        maximumChances++;
      });

      return [chanceToWin, maximumChances];
    },

    improveArmy() {
      Object.keys(this).forEach(key => {
        if (typeof this[key] === "function") return; // Нет смысла обрабатывать если значение это функция
        this[key] += 5;
      });
    },

    attack(defender) {
      const [ourArmyChances, maximumChances] = this.checkChancesToWin(defender);
      if (ourArmyChances / maximumChances < 0.7) {
        this.improveArmy();
        console.log(`Наши шансы равны ${ourArmyChances}/${maximumChances}. Необходимо укрепление!`)
      }
      else {
        console.log("Мы усилились! Мы несомненно победим! Наши шансы высоки!");
      }
    }
  }

  const defender = {
    archer: 33,
    footSoldier: 50,
    cavalry: 40,
    artillery: 10,
  }

  console.group("TASK 1")
  attacker.attack(defender); // Наши шансы равны 1/4. Необходимо укрепление!
  attacker.attack(defender); // Наши шансы равны 2/4. Необходимо укрепление!
  attacker.attack(defender); // Мы усилились! Мы несомненно победим! Наши шансы высоки!
  console.groupEnd();
}());


//  OOP. Extra task #1  🚩
(function task1OOP() {
  class Dictionary {
    #name;
    #words;

    constructor(name) {
      this.#name = name;
      this.#words = {};
    }

    get mainName() {
      return this.#name;
    }

    set setMainName(name) {
      this.#name = name;
      return this;
    }

    get allWords() {
      return this.#words
    }

    #addNewWord(wordKey, wordObj) {
      this.#words[wordKey] = wordObj;
      return this;
    }

    add(word, description) {
      const wordInDictionary = this.#words[word];
      if (wordInDictionary === undefined) {
        this.#addNewWord(word, {
          word: word,
          description: description
        });
      }
      return this;
    }

    remove(word) {
      delete this.#words[word];
      return this;
    }

    get(word) {
      return this.#words[word];
    }

    showAllWords() {
      Object.values(this.#words)
        .forEach(entry => console.log(`${entry.word} - ${entry.description}`));
      return this;
    }
  }


  class HardWordsDictionary extends Dictionary {
    constructor(name) {
      super(name);
    }

    add(word, description) {
      super.add(word, description);
      this.allWords[word].isDifficult = true;
      return this;
    }
  }

  console.group("TASK 2")
  const hardWordsDictionary = new HardWordsDictionary('Сложные слова');

  hardWordsDictionary.add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.');

  hardWordsDictionary.add('неологизм', 'Новое слово или выражение, а также новое значение старого слова.');

  hardWordsDictionary.add('квант', 'Неделимая часть какой-либо величины в физике.');

  hardWordsDictionary.remove('неологизм');

  hardWordsDictionary.showAllWords();

  console.log(hardWordsDictionary.mainName); // Сложные слова
  hardWordsDictionary.setMainName = 'Новый Словарь';
  console.log(hardWordsDictionary.mainName); // Новый Словарь
  console.log(hardWordsDictionary.allWords); // выводит объект в котором есть слова // дилетант и квант
  console.groupEnd();
}());


// OOP. Extra task #2  🚩
(function task2OOP() {

  class CarService {
    static DefaultWorkingHours = {
      from: '9:00',
      till: '20:00',
    }

    constructor(name, workingHours = CarService.DefaultWorkingHours) {
       this.name = name;
       this.workingHours = workingHours;
    }

    repairCar(carName ) {
      if (carName === undefined){
        console.error("Вам необходимо указать название машины, чтобы ее отремонтировать");
      }

      const serviceWorkFromHour = Number(this.workingHours.from.split(":")[0]);
      const serviceWorkTillHour = Number(this.workingHours.till.split(":")[0]);
      const currentHour = new Date().getHours();

      if (currentHour > serviceWorkFromHour && currentHour < serviceWorkTillHour){
        console.log(`Сейчас отремонтируем вашу машину ${carName}! Ожидайте, пожалуйста`)
      }
      else {
        console.log("К сожалению, мы сейчас закрыты. Приходите завтра");
      }
    }
  }

  console.group("TASK 3");
  const carService = new CarService('RepairCarNow', { from: '3:00', till: '20:00' });
  carService.repairCar('BMW');

  const carService2 = new CarService('RepairCarNow');
  carService2.repairCar("Lada")
  console.groupEnd();

}());
