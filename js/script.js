'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    if (li.key !== undefined) {
      li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
				<div class="todo-buttons">
					<button class="todo-remove"></button>
					<button class="todo-complete"></button>
				</div>  
        `);

      if (todo.completed) {
        this.todoCompleted.append(li);
      } else {
        this.todoList.append(li);
      }
    }
  }

  addTodo(event) {
    event.preventDefault();
    if (!this.input.value.trim()) {
      alert('Планы не должны быть пустыми');
      return;
    }
    const newTodo = {
      value: this.input.value,
      completed: false,
      key: this.generateKey()
    };
    this.todoData.set(newTodo.key, newTodo);
    this.render();
  }

  generateKey() {
    return Math.random().toString(36).substring(2, 15);
  }

  deleteItem(key) {
    this.todoData.forEach((elem, i) => {
      if (elem.key === key) {
        let data = this.todoData;
        delete elem.key;
        delete elem.value;
        delete elem.completed;
      }
    });
    this.render();
  }

  complatedItem(key) {
    this.todoData.forEach((elem) => {
      if (elem.key === key) {
        elem.completed = !elem.completed;
      }
    });
    this.render();
  }

  handler() {
    const handInput = document.querySelector('.todo-container');
    handInput.addEventListener('click', (event) => {
      let target = event.target;
      let target2 = target,
        target3 = target;
      target = target.closest('.todo-item');
      let key = target.key;
      target2 = target2.matches('.todo-remove');
      if (target2) {
        this.deleteItem(key);
      }
      target3 = target3.matches('.todo-complete');
      if (target3) {
        this.complatedItem(key);
      }

    });


  }


  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
    this.handler();
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed');
todo.init();


