
let num = 266219;
numStr = String(num);   // переводим ы строку

let multiplication = 1;
// цикл перебора строки по её длине
for (let i = 0; i < numStr.length; i++) {
  multiplication = multiplication * (+numStr.substr(i, 1));// перемножение чисел строки
}
console.log(multiplication);
multiplication **= 3;   // возведение в куб

console.log(String(multiplication).substr(0, 2));  // вывод первых двух цифр цисла

