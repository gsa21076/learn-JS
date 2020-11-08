'use strict';

class Todo {
  constructor(form, input, todoList, todoCompleted, todoEdit) {
    this.form = document.querySelector(form);
    this.input = document.querySelector(input);
    this.todoList = document.querySelector(todoList);
    this.todoCompleted = document.querySelector(todoCompleted);
    this.todoEdit = document.querySelector(todoEdit);
    this.todoData = new Map(JSON.parse(localStorage.getItem('toDoList')));

  }

  addToStorage() {
    localStorage.setItem('toDoList', JSON.stringify([...this.todoData]));
  }

  render() {
    this.todoList.textContent = '';
    this.todoCompleted.textContent = '';
    this.todoEdit.textContent = '';
    this.todoData.forEach(this.createItem, this);
    this.addToStorage();
  }

  createItem(todo) {
    const li = document.createElement('li');
    li.classList.add('todo-item');
    li.key = todo.key;
    li.insertAdjacentHTML('beforeend', `
        <span class="text-todo">${todo.value}</span>
        <div class="todo-buttons">
          <button class="todo-edit"></button>
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

    // console.log(key);

    this.todoData.forEach((elem) => {
      if (elem.key === key) {
        // let data = this.todoData;
        // console.log(data);
        // console.log(this.todoData);
        console.log(elem.key, key);
        // delete key;
        console.log(this.todoData);
        // localStorage.removeItem('toDoList'.key);
      }
    });

    // console.log(this.todoData);
    this.render();
  }

  complatedItem(key) {
    this.todoData.forEach((elem, i) => {
      if (elem.key === key) {
        console.log(elem);
        elem.completed = !elem.completed;
      }
    });
    this.render();
  }

  editItem(key) {

  }


  handler() {
    const handInput = document.querySelector('.todo-container');
    handInput.addEventListener('click', (event) => {
      let target = event.target;
      // console.log(target);
      let target2 = target,
        target3 = target,
        target4 = target;
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
      target4 = target4.matches('.todo-edit');
      if (target4) {
        this.editItem();
      }
    });


  }


  init() {
    this.form.addEventListener('submit', this.addTodo.bind(this));
    this.render();
    this.handler();
  }
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-edit');
todo.init();


