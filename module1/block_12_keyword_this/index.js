// Keyword this. task #1  🚩
(function task1() {
  const lvls = {
    1: "HTML",
    2: "CSS",
    3: "JavaScript",
    4: "REACT",
    5: "NodeJS"
  }

  const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
      if (this.level === 5) {
        console.log("Студент выучил все технологии!");
        return this;
      }
      this.stack.push(lvls[++this.level])
      return this;
    }
  }

  console.group("Task 1");
  student
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()
    .improveLevel()

  console.log(student);
  console.groupEnd();
}());


// Keyword this. task #2  🚩
(function task2() {
  const dog = {
    name: 'Чарли',
    type: 'Собака',
    makeSound() {
      return 'Гав-Гав';
    }
  }

  const bird = {
    name: 'Петя',
    type: 'Воробей',
    makeSound() {
      return 'Чик-чирик';
    }
  }

  function makeDomestic(isDomestic) {
    console.log(`${this.type} по имени ${this.name} говорит ${this.makeSound()}`);
    return {
      ...this,
      isDomestic
    }
  }

  console.group("Task 2");
  const newDomesticDog = makeDomestic.bind(dog)(true);
  console.log(newDomesticDog);

  const newDomesticBird1 = makeDomestic.call(bird, true);
  console.log(newDomesticBird1);

  const newDomesticBird2 = makeDomestic.apply(bird, [true]);
  console.log(newDomesticBird2);
  console.groupEnd();
}());


// Keyword this. task #3  🚩
(function task3() {
  const footballer = {
    fullName: 'Cristiano Ronaldo',
    attack: () => {
      console.log(`${this.fullName} сейчас с мячом и начинает атаку!`);
    },
    scoreGoal(sound) {
      console.log(`${this.fullName} забил гол! Вот это да!`);
      this.celebrate(sound);
    },
    celebrate(sound) {
      console.log(sound);
    },
    goToSubstitution: function(newPlayer) {
      console.log(`${this.fullName} уходит на замену. На поле выходит ${newPlayer}`);
    }
  };

  console.group("Task 3");
  footballer.attack.bind(footballer);
  footballer.scoreGoal.call(footballer, "Сиииии ヾ(≧▽≦*)o");
  footballer.goToSubstitution.apply(footballer, ["Paulo Dibala"]);
  console.groupEnd();
}());
