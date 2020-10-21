'use strict';

const books = document.querySelector('.books'),
  book = document.querySelectorAll('.book'),
  chapters = document.querySelectorAll('li'),
  a = document.querySelectorAll('a');


// замена текста в ссылке
a[4].textContent = 'Книга 3. this и Прототипы Объектов';

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';// замена картинки заднего фона
document.querySelector('.adv').remove();// удаление рекламы


// порядок книг
books.prepend(book[1]);// помнял 1 и 2
book[4].after(book[3]);// поменял 3 и 4
books.append(book[2]);// поставил 6 в конец


// восстановление порядка глав
// во второй книге 
chapters[4].before(chapters[6]);
chapters[4].before(chapters[8]);
chapters[10].before(chapters[2]);
// в пятой книге
chapters[48].before(chapters[55]);
chapters[52].before(chapters[48]);
chapters[54].before(chapters[51]);
//вставка главы в шестой книге
chapters[26].before('Глава 8: За пределами ES6');



