'use strict';
const isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n); // если число то функция вернет true
}
debugger
function getUserNumber(string) {
  const num = prompt(string);

  if (isNumber(num)) {
    return +num;

  }

  if (num === null) {
    return null;
  }

  alert('Введи число!')

  return getUserNumber(string);
}

function randomNumber(n, m) {
  const minNumber = Math.min(n, m);

  const range = Math.abs(m - n);

return Math.round(Math.random() * range + minNumber);
}

const guessNumber = function () {
  const hiddenNumber = randomNumber(1, 100);
  let count = 10;

  function game() {
    count--;

    if (count === 0) {
      if (confirm("Попытки закончились, хотите сыграть еще?")) {
        guessNumber();
      }
      return;
    }

    const number = getUserNumber('Угадай число от 1 до 100');
    console.dir(game)

    if (number === null) {
      alert('Игра окончена');
      return;
    }
    if (number > hiddenNumber) {
      alert(`Загаданное число меньше, осталось попыток ${count}`);
      game();
    }
    if (number < hiddenNumber) {
      alert(`Загаданное число больше, осталось попыток ${count}`);
      game();
    }

    if (number === hiddenNumber) {
      if (confirm('Поздравляю, Вы угадали!!! Хотели бы сыграть еще?')) {
        guessNumber();
      }
      return;
    }
  }
  game();
}

guessNumber();