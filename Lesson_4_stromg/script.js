// "use strict";
// …

let perem = '    Далеко-далеко за словесными, горами в стране гласных и согласных живут рыбные тексты. Алфавит все использовало дорогу взгляд большого.  ';

console.log('Изначальный текст :');
console.log(perem);

//Ф-ия трансформации текста
const operText = function (param) {
  let ind = '';  // переменная для сравнения

  if (typeof param !== 'string') {
    alert('Это не строка');
  } else {
    let strLength = param.length;  // длина строки
    // удаление пробелов с начала строки
    for (i = 0; i < strLength; i++) {
      ind = param.substr(i, 1);
      if (ind === ' ') {
        // подсчет пробелов в начале
      } else {
        break;
      }
    }

    console.log('Кол-во пробелов в начале - ' + i);
    param = param.slice(i);
    console.log('Текст без пробелов в начале :');
    console.log(param);

    // удаление пробелов с конца строки
    strLength = param.length;
    for (i = strLength; i >= 0; i--) {
      ind = param.substr(i - 1, 1);
      if (ind === ' ') {
        // подсчет пробелов в конце
      } else {
        break;
      }
    }
    console.log('Кол-во пробелов в конце - ' + (param.length - i));
    param = param.substring(0, i);
    console.log('Текст без пробелов в конце :');
    console.log(param);
  }

  // Скрытие текста
  param = param.substr(0, 30) + '…';
  console.log('Скрытие текста :');
  console.log(param);
}

// вызов ф-ии
operText(perem);