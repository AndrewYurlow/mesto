const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

const showError = (input, inputErrorSelector) => {
  input.classList.add(inputErrorSelector);
  const errorMessage = document.querySelector(`#${input.id}-error`);
  errorMessage.textContent = input.validationMessage;
}

const hideError = (input, inputErrorSelector) => {
  input.classList.remove(inputErrorSelector);
  const errorMessage = document.querySelector(`#${input.id}-error`);
  errorMessage.textContent = '';
}

const toggleButton = (button, buttonInactiveSelector, form) => {
  if(form.checkValidity()){
    button.classList.remove(buttonInactiveSelector);
    button.removeAttribute('disabled');
  }else{
    button.classList.add(buttonInactiveSelector);
    button.setAttribute('disabled', true);
  }
}

const checkInputValidity = (inputElement, inputErrorSelector) => {
  if(inputElement.checkValidity()){
    hideError(inputElement, inputErrorSelector);
  }else{
    showError(inputElement, inputErrorSelector);
  }
}

const validateInputs = (form, inputList, inputErrorSelector, button, buttonInactiveSelector) => {
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(inputElement, inputErrorSelector);
      toggleButton(button, buttonInactiveSelector, form);
    });
  });
}

const enableValidation = (formSelectorsObject) =>{
  const formList = Array.from(document.querySelectorAll(formSelectorsObject.formSelector));
  formList.forEach(form => {
    const inputList = Array.from(form.querySelectorAll(formSelectorsObject.inputSelector));
    const formSubmitButton = form.querySelector(formSelectorsObject.submitButtonSelector);
    validateInputs(form, inputList, formSelectorsObject.inputErrorClass, formSubmitButton, formSelectorsObject.inactiveButtonClass);
  });
}
