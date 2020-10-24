'use strict';

const todoControl = document.querySelector('.todo-control'),
  headerInput = document.querySelector('.header-input'),
  todoList = document.querySelector('.todo-list'),
  todoCompleted = document.querySelector('.todo-completed');
let todoData = localStorage.getItem('Data');
todoData = JSON.parse(todoData);


// }
if (todoData === null) {
  todoData = [];
}

// запись в locaStorage
const saveObj = function () {
  console.log(typeof todoData);
  console.log(todoData);

  todoData.forEach(function (item) {
    localStorage.setItem('Data', JSON.stringify(todoData));
  });

  render();
};

const render = function () {
  console.log(todoData);
  todoList.textContent = '';
  todoCompleted.textContent = '';

  todoData.forEach(function (item) {
    const li = document.createElement('li');
    li.classList.add('todo-item');

    li.innerHTML = '<span class="text-todo">' + item.value + '</span>' +
      '<div class="todo-buttons">' +
      '<button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      '</div>';


    if (item.complited) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    // перевод в выполненное и назад
    const btnTodoComplate = li.querySelector('.todo-complete');
    btnTodoComplate.addEventListener('click', function () {
      item.complited = !item.complited;
      saveObj();
    });

    //удаление элементов
    const btnTodoRemove = li.querySelector('.todo-remove');
    btnTodoRemove.addEventListener('click', function () {
      let i = todoData.indexOf(item);
      todoData.splice(i, 1);
      saveObj();
    });
  });
};

// добавление дел
todoControl.addEventListener('submit', function (event) {
  event.preventDefault();// Отключение перезагрузки страницы

  const newTodo = {
    value: headerInput.value,
    complited: false
  };
  if (newTodo.value !== '') {
    todoData.push(newTodo);
    headerInput.value = '';
    saveObj();
  }
});

render();