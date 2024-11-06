
const form = document.querySelector('form');
const nameInput = document.getElementById('exampleFormControlInput1');
const nameError = document.querySelector('#exampleFormControlInput1 + p');
const messageInput = document.getElementById('exampleFormControlTextarea1');
const messageError = document.querySelector('#exampleFormControlTextarea1 + p');
const phoneInput = document.getElementById('exampleFormControlInput2');
const phoneError = document.querySelector('#exampleFormControlInput2 + p');
const emailInput = document.getElementById('exampleFormControlInput3');
const emailError = document.querySelector('#exampleFormControlInput3 + p');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  let isValid = true;


  if (nameInput.value.trim() === '') {
    showError(nameInput, nameError, 'Це поле є обов\'язковим');
    isValid = false;
  } else {
    hideError(nameInput, nameError);
  }


  if (messageInput.value.trim().length < 5) {
    showError(messageInput, messageError, 'Повідомлення має бути не менше 5 символів');
    isValid = false;
  } else {
    hideError(messageInput, messageError);
  }

  const phoneRegex = /^\+380\d{9}$/;
  if (!phoneRegex.test(phoneInput.value.trim())) {
    showError(phoneInput, phoneError, 'Введіть дійсний номер телефону у форматі +380XXXXXXXXX');
    isValid = false;
  } else {
    hideError(phoneInput, phoneError);
  }


  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (!emailRegex.test(emailInput.value.trim())) {
    showError(emailInput, emailError, 'Введіть дійсну адресу електронної пошти');
    isValid = false;
  } else {
    hideError(emailInput, emailError);
  }

  if (isValid) {
    const formData = new FormData(event.target);
    const formObj = {};
    formData.forEach((value, key) => (formObj[key] = value));
    console.log(formObj);

  }
});

function showError(input, errorElement, message) {
  input.classList.add('is-invalid');
  errorElement.textContent = message;
  input.style.border = '2px solid red';
}

function hideError(input, errorElement) {
  input.classList.remove('is-invalid');
  errorElement.textContent = '';
  input.style.border = '';
}