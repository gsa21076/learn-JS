'use strict';


function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.select = function () {
  if (this.selector.substring(0, 1) === ".") {
    // console.log(this.selector.substring(0, 1));
    this.bodyElem = document.createElement('div');
    this.bodyElem.classList.add(this.selector.substring(1));
    // console.log(this.bodyElem.classList);
    this.bodyElem.style.cssText = `
      height: ${this.height};
      width: ${this.width};
      background: rgb(${this.bg});
      font-size: ${this.fontSize};`;
    return this.bodyElem;

  } else {
    if (this.selector.substring(0, 1) === '#') {
      this.bodyElem = document.createElement('p');
      this.bodyElem.setAttribute('id', this.selector.substring(1));
      this.bodyElem.style.cssText = `
        height: ${this.height};
        width: ${this.width};
        background: rgb(${this.bg});
        font-size: ${this.fontSize};`;

      return this.bodyElem;
    }
  }

};

let domElement1 = new DomElement('.block', '100px', '900px', '255, 50, 50', '30px');
const elem = domElement1.select();
document.body.append(elem);
elem.innerText = 'Это тема урока наследование и прототипы';

let domElement2 = new DomElement('#best', '200px', '600px', '100, 50, 50', '50px');
const elem2 = domElement2.select();
document.body.append(elem2);
elem2.innerText = 'Это новый объект';



