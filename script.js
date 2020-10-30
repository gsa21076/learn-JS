'use strict';


class First {
  hello() {
    console.log('Привет я метод родителя!');
  }
}

class Second extends First {
  hello() {
    console.log('Привет я метод родителя!');
    this.hello2();
  }

  hello2() {
    console.log('А я наследуемый метод!');
  }

  // {
  //   const first = new First();
  //   first.hello();
  //   console.log('А я наследуемый метод!');
  // }
}

const second = new Second();
second.hello();