'use strict';
// const number = prompt('Угадай число от 1 до 100');
// console.log(number)
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n); // если число то функция вернет true
}

// function getUserNumber(string) {
//   const n = prompt(string);
  
//   if (isNumber(n)) {
//     return +n;

//   } else if (n === null) {
//     return null;

//   } else {
//     getUserNumber(string)
//   }
// } 

const guessNumber = function () {
  const hiddenNumber = 10;
  let count = 10;

  function getNumberUser() {
    count--;
    // console.log(count);
    if (count === 0) return;
    const number = prompt('Угадай число от 1 до 100');

    if (number > hiddenNumber && number !== null) {
      alert(`Загаданное число меньше, осталось попыток ${count}`);
      getNumberUser();

    } else if (number < hiddenNumber  && number !== null) {
      alert(`Загаданное число больше, осталось попыток ${count}`);
      getNumberUser();

    } else if (!isNumber(number) && number !== null) {
      if (confirm('Введи число! Введите новое значение!')) {
        getNumberUser();
      };

    } else if (number === null) {
      alert('Игра окончена');

    } else if (number == hiddenNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        count = 10;
        getNumberUser();
      };

    }
  }
  getNumberUser();
}

guessNumber();