
let num = 266219;
numStr = String(num);   // переводим ы строку

let multiplication = 1;
for (let i = 0; i < numStr.length; i++) {
  multiplication = multiplication * (+numStr.substr(i, 1));
}
console.log(multiplication);
multiplication **= 3;

console.log(String(multiplication).substr(0, 2));