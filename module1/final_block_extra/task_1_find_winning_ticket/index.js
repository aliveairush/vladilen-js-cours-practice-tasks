// 🚩 Task 1
(function task1() {
  for (let i = 1937; i >= 1016; i--) {
    const isDivisibleOn3and7 = i % 3 === 0 && i % 7 === 0;
    const isNotDivisibleOn2and5 = i % 2 !== 0 && i % 5 !== 0;

    if (isDivisibleOn3and7 && isNotDivisibleOn2and5) {
      console.log("Winning ticket is: ", i); // Answer 1911
      return i;
    }

  }
}());
