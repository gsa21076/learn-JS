const sendForm = () => {
  const errorMessage = 'Что-то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с Вами свяжемся.';

  const form = document.querySelectorAll('form[name=user_form]'),
    inputName = document.querySelectorAll('input[name=user_name]'),
    inputEmail = document.querySelectorAll('.form-email'),
    inputPhone = document.querySelectorAll('.form-phone'),
    inputMess = document.querySelector('.mess');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = `font-size: 2rem;
    color: grey;`;

  const postData = (body) => {
    inputName.forEach(elem => elem.value = '');
    inputPhone.forEach(elem => elem.value = '');
    inputEmail.forEach(elem => elem.value = '');
    inputMess.value = '';
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
  };

  inputName.forEach((name) => {
    name.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\ ]/g, '');
    });
  });

  inputPhone.forEach((phone) => {
    phone.addEventListener('input', (event) => {
      event.target.value = event.target.value.replace(/[^\8+\d(10)-]/g, '');
    });
  });
  inputMess.addEventListener('input', (event) => {
    event.target.value = event.target.value.replace(/[^А-ЯЁа-яё\ \,\.]*$/gi, '');
  });

  form.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      form.appendChild(statusMessage);
      statusMessage.textContent = loadMessage;
      const formData1 = new FormData(form);
      let body = {};
      formData1.forEach((val, key) => {
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if (response.status !== 200) {
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
        })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });

    });
  });
};

export default sendForm;