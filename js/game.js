// function numberGuess() {
//   let secretNumber = Math.floor(Math.random() * 10 + 1);
//   const numberAttemps = 3;
//   let yourNumber = Number(
//     prompt(`Начнем игру. Угадай секретное число. Вводи свой вариант ниже`)
//   );

//   for (let i = 0; i < numberAttemps; i += 1) {
//     if (Number(yourNumber) === secretNumber) {
//       console.log("Отлично!");
//       alert(`Это победа - Ты угадал число`);
//       return "Отлично!";
//     } else if (i < numberAttemps - 1) {
//       prompt(`Это не то число, попробуй еще раз!`);
//     } else {
//       alert(
//         `Игра окончена, секретное число было близко. Я загадал ${secretNumber}! Попробуй еще раз - обнови страницу`
//       );
//     }
//   }
// }

// numberGuess();

function numberGuess() {
  let secretNumber = Math.floor(Math.random() * 10 + 1);
  const numberAttempts = 3;
  let yourNumber = Number(
    prompt(
      `Начнем новую игру 
Угадай секретное число от 1 до 10, которое я загадал. У тебя ${numberAttempts} ${properEnding(
        numberAttempts,
        "попытк"
      )}`
    )
  );

  for (let i = 0; i < numberAttempts; i += 1) {
    if (Number(yourNumber) === secretNumber) {
      console.log("Отлично!");
      alert(
        `Победа за тобой! Секретное число угадано с ${
          i + 1
        }-й попытки. Мои поздравления, ты получаешь ${pointsCalc(
          i + 1
        )} баллов за победу! Попробуй снова, обнови страницу!`
      );
      return "Отлично!";
    } else if (i < numberAttempts - 1) {
      yourNumber = prompt(
        `Твое число ${numberComparison(
          yourNumber,
          secretNumber
        )}. Попробуй угадать секретное число! еще ${
          numberAttempts - 1 - i
        } ${properEnding(numberAttempts - 1 - i, "попытк")}`
      );
    } else {
      alert(
        `Игра окончена - секретное число оказалось сложным для тебя! Были использованы все ${numberAttempts} ${properEnding(
          numberAttempts,
          "попытк"
        )} безрезультатно и ты не получаешь никаких баллов.
Загаданное число это ${secretNumber} ! Попробуй снова, обнови страницу!`
      );
    }
  }
}
numberGuess();

function numberComparison(a, b) {
  if (Number.isNaN(a)) {
    console.log(`указано ${a}, а нужно было число!`);
    return "совсем не число";
  } else if (a > b) {
    console.log(`указано число ${a}, секретное число меньше`);
    return "большое";
  } else console.log(`указано число ${a}, секретное число больше`);
  return "маленькое";
}

function properEnding(a, checkedWord) {
  if (a > 1) {
    return `${checkedWord}и`;
  } else if (a == 1) {
    return `${checkedWord}а`;
  }
}

function pointsCalc(a) {
  if (a === 1) {
    return 100;
  } else if (a === 2) {
    return 50;
  } else if (a === 3) {
    return 10;
  }
}
