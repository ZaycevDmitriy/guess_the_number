'use strict';
// const number = prompt('Угадай число от 1 до 100');
// console.log(number)
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n); // если число то функция вернет true
}

const guessNumber = function () {
  const hiddenNumber = 10;
  let count = 10;

  function getNumberUser() {
    count -= 1;
    console.log(count);
    if (count === 0) return;
    const number = prompt('Угадай число от 1 до 100');

    if (number > hiddenNumber && number !== null) {
      alert('Загаданное число меньше');
      getNumberUser();
    } else if (number < hiddenNumber  && number !== null) {
      alert('Загаданное число больше');
      getNumberUser();
    } else if (!isNumber(number) && number !== null) {
      alert('Введи число!');
      getNumberUser();
    } else if (number === null) {
      alert('Игра окончена');
      return;
    } else if (number === hiddenNumber) {
      alert('Поздравляю, Вы угадали!!!');
      return;
    }
  }
  getNumberUser();
}

guessNumber();