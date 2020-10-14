// "use strict";

arr = ['1546', '2985', '894', '47', '652', '275', '499'];

for (const ar of arr) {
  if (+ar.substr(0, 1) === 2 || +ar.substr(0, 1) === 4) {
    console.log(ar);
  }
}

// простые числа

start:
for (let i = 1; i <= 100; i++) {
  for (let j = 1; j < i; j++) {

    if (i % j == 0 && j !== 1) continue start; // сравнение j!==1 для цифры 1
  }
  console.log(i, 'Делители этого числа: ', 1, ' и ', i);
}
