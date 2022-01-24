(function task1() {
  // Initial data;
  const users = [
    {
      username: 'David',
      status: 'online',
      lastActivity: 10
    },
    {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 22
    },
    {
      username: 'Bob',
      status: 'online',
      lastActivity: 104
    }
  ]

  const onlineUsers = users.filter(user => user.status === 'online');
  const usersOnlineNames = onlineUsers
    .map(user => user.username)
    .join(', ');

  console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`);
}());


(function task2() {
  const giveTalonsInOrder = (patients, orders) => {
    // Transform patients into object, to use it as Map
    const object = patients.reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});

    return orders.map(id => object[id]);
  }

  const ordersArr = [4, 2, 1, 3];
  const people = [
    {id: 1, name: "Максим"},
    {id: 2, name: "Николай"},
    {id: 3, name: "Ангелина"},
    {id: 4, name: "Виталий"},
  ];

  console.log('TASK 2 Result', giveTalonsInOrder(people, ordersArr));
}());


(function task3() {
  // Helper object
  const actions = {
    "get": (object, key) => object[key],
    "add": (object, key) => {
      object[key] = '';
      return object;
    },
    "delete": (object, key) => {
      delete object[key];
      return object;
    },
  }

  // If action exists in Action list then call action, otherwise return object
  const handleObject = ({obj, key, action}) => actions[action] !== undefined ? actions[action](obj, key) : obj;

  // Tests
  const student = {
    name: 'Maxim',
    programmingLanguage: 'JavaScript',
  }

  const result = handleObject({obj: student, key: 'programmingLanguage', action: 'delete'});
  console.log('Task 3) result', result);

  const result1 = handleObject({obj: student, key: 'test', action: 'add'});
  console.log('Task 3) result1', result1);

  const result2 = handleObject({obj: student, key: 'name', action: 'get'});
  console.log("Task 3) result 2", result2);

  const result3 = handleObject({obj: student, key: 'name', action: 'fdf'});
  console.log('Task 3) result3', result3);
}());


(function task4() {
  const giveJobToStudent = ({student, jobName}) => {
    // Creating clone object
    const newStudent = {...student, stack: [...student.stack], "job": jobName};
    console.log(`Поздравляем! У студента ${newStudent.fullName} появилась новая работа! Теперь он ${jobName}`);
    return newStudent;
  }

  const student = {
    fullName: 'Максим',
    experienceInMonths: 12,
    stack: ['HTML', 'CSS', 'JavaScript', 'React'],
  }

  const updatedStudent = giveJobToStudent({student, jobName: 'веб-разработчик'});
  console.log("Old object", student);
  console.log("New object", updatedStudent);
}());
