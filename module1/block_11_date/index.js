(function task1() {
  const addZeroAtStartIfSingleDigit = (number) => number < 10 ? `0${number}` : String(number);

  const getDateFormat = (date, separator = '.') => {
    const year = date.getFullYear();
    let month = Number(date.getMonth()) + 1;
    let day = date.getDate();

    month = addZeroAtStartIfSingleDigit(month);
    day = addZeroAtStartIfSingleDigit(day);

    return `${day}${separator}${month}${separator}${year}`;
  }

  const date = new Date(2001, 4, 7);
  console.assert(getDateFormat(date, "-") === '07-05-2001');

  const date1 = new Date(1998, 9, 1);
  console.assert(getDateFormat(date1) === '01.10.1998');
}());


(function task2() {
  const convertMsToDays = (ms) => Math.round(ms / 86_400_000);

  const getDaysBeforeBirthday = (nextBirthdayDate) => {
    const birthdateMs = nextBirthdayDate.getTime();
    const nowMs = Date.now();

    return convertMsToDays(birthdateMs - nowMs);
  }

  const date1 = new Date(2022, 1, 10);
  console.log("До дня рождения осталось дней: ", getDaysBeforeBirthday(date1));
}());


(function task3() {
  const addDays = (date, days = 1) => new Date(date.getTime() + (days * 86_400_000));

  console.log("Added 35 days: ", addDays(new Date(2022, 1, 3), 35 ));
}());
