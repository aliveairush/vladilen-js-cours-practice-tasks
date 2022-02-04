// OOP. task #1  🚩
(function task1() {

  class Student {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.technologies = [];
      this.status = 'Junior'
    }

    setTechnologies(technologies) {
      this.technologies = [
        ...this.technologies,
        ...technologies,
      ];
    }

    setNewStatus(newStatus) {
      this.status = newStatus;
    }
  }

  console.group("TASK 1")
  const student = new Student('Maxim', 20);
  student.setTechnologies(['HTML', 'CSS', 'JavaScript']);
  student.setNewStatus('Middle');
  console.log(student);

  console.groupEnd();
}());


// OOP. task #2  🚩
(function task2() {

  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    compareAge(anotherPerson) {
      if (this.age >= anotherPerson.age) {
        console.log(`${this.name} старше, чем ${anotherPerson.name}`);
      }
      else {
        console.log(`${this.name} младше, чем ${anotherPerson.name}`)
      }
    }
  }

  const person1 = new Person('Максим', 24);
  const person2 = new Person('Светлана', 36);
  const person3 = new Person('Ирина', 23);

  console.group("TASK 2");
  person1.compareAge(person2); // Максим младше, чем Светлана
  person2.compareAge(person3); // Светлана старше, чем Ирина
  person3.compareAge(person1); // Ирина младше, чем Максим
  console.groupEnd();
}());


// OOP. task #3  🚩
(function task3() {
  class Dictionary {
    constructor(name) {
      this.name = name;
      this.words = {};
    }

    add(word, description) {
      const wordInDictionary = this.words[word];
      if (wordInDictionary === undefined) {
        this.words[word] = {
          word: word,
          description: description
        };
      }
      return this;
    }

    remove(word) {
      delete this.words[word];
      return this;
    }

    get(word) {
      return this.words[word];
    }

    showAllWords() {
      Object.values(this.words)
        .forEach(entry => console.log(`${entry.word} - ${entry.description}`));
      return this;
    }
  }

  console.group("TASK 3");
  const dictionary = new Dictionary('Толковый словарь')
    .add('JavaScript', 'популярный язык программирования')
    .add('HTML', 'HyperText Markup Language')
    .add('CSS', 'Cascading Style Sheets')
    .add('Веб-разработчик', 'Человек, который создает новые сервисы и сайты или поддерживает и дополняет существующие')
    .remove('JavaScript')
    .showAllWords();
  console.groupEnd();
}());


// OOP. task #4  🚩
(function task4() {
  // Same code from task 3
  class Dictionary {
    constructor(name) {
      this.name = name;
      this.words = {};
    }

    add(word, description) {
      const wordInDictionary = this.words[word];
      if (wordInDictionary === undefined) {
        this.words[word] = {
          word: word,
          description: description
        };
      }
      return this;
    }

    remove(word) {
      delete this.words[word];
      return this;
    }

    get(word) {
      return this.words[word];
    }

    showAllWords() {
      Object.values(this.words)
        .forEach(entry => console.log(`${entry.word} - ${entry.description}`));
      return this;
    }
  }

  // New code task 4
  class HardWordsDictionary extends Dictionary {
    constructor(name) {
      super(name);
    }

    add(word, description) {
      super.add(word, description);
      this.words[word].isDifficult = true;
      return this;
    }
  }

  console.group("TASK 4");
  const hardWordsDictionary = new HardWordsDictionary('Сложные слова')
    .add('дилетант', 'Тот, кто занимается наукой или искусством без специальной подготовки, обладая только поверхностными знаниями.')
    .add('квант', 'Неделимая часть какой-либо величины в физике.')
    .remove('неологизм')
    .showAllWords();

  console.log(hardWordsDictionary);
  console.groupEnd();
}());


// OOP. task #5  🚩
(function task4() {

  class Developer {
    constructor(fullName, age, position) {
      this.fullName = fullName;
      this.age = age;
      this.position = position;
      this.technologies = [];
    }

    code() {}

    learnNewTechnology(technology) {
      this.technologies.push(technology);
    }
  }

  class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
      super(fullName, age, 'Junior');
      this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
      super.code();
      console.log('Junior разработчик пишет код...');
    }
  }

  class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
      super(fullName, age, 'Middle');
      this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
      super.code();
      console.log('Middle разработчик пишет код...');
    }
  }

  class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
      super(fullName, age, 'Senior');
      this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
      super.code();
      console.log('Senior разработчик пишет код...');
    }
  }

  console.group("TASK 5")
  const juniorDeveloper = new JuniorDeveloper('Анастасия', 20)
  const middleDeveloper = new MiddleDeveloper('Игорь', 25)
  const seniorDeveloper = new SeniorDeveloper('Максим', 30)

  juniorDeveloper.code(); // Junior разработчик пишет код...
  middleDeveloper.code(); // Middle разработчик пишет код…
  seniorDeveloper.code(); // Senior разработчик пишет код...

  console.log(juniorDeveloper.fullName, juniorDeveloper.age,
    juniorDeveloper.position); // 'Анастасия', 20, 'Junior'
  console.log(middleDeveloper.fullName, middleDeveloper.age,
    middleDeveloper.position); // 'Игорь', 25, 'Middle'
  console.log(seniorDeveloper.fullName, seniorDeveloper.age,
    seniorDeveloper.position); // 'Максим', 30, 'Senior'

  console.groupEnd();
}());