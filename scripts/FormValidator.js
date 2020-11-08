const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

class FormValidator{
  constructor(form){
    this._formSelectors = formSelectors;
    this._form = form;
    this._submitButton = this._form.querySelector(this._formSelectors.submitButtonSelector);
    this._inputs = Array.from(this._form.querySelectorAll(this._formSelectors.inputSelector));
    this._errorSelector = this._formSelectors.inputErrorClass;
    this._inactiveButtonSelector = this._formSelectors.inactiveButtonClass;
  }
  _showError(input){
    input.classList.add(this._errorSelector);
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = input.validationMessage;
  }
  _hideError(input){
    input.classList.remove(this._errorSelector);
    const errorMessage = this._form.querySelector(`#${input.id}-error`);
    errorMessage.textContent = '';
  }
  _toggleButton(button){
    if(this._form.checkValidity()){
      button.classList.remove(this._buttonInactiveSelector);
      button.removeAttribute('disabled');
    }else{
      button.classList.add(this._buttonInactiveSelector);
      button.setAttribute('disabled', true);
    }
  }
  _checkValidity(input){
    if(input.checkValidity()){
      this._hideError(input)
    }else{
      this._showError(input);
    }
  }
  _validateInputs(){
    this._inputs.forEach(element =>{
      element.addEventListener('input', () =>{
        this._checkValidity(element);
        this._toggleButton(this._submitButton);
      });
    });
  }
  enableValidation(){
    this._inputs.forEach(input =>{
      this._hideError(input);
    });
    this._toggleButton(this._submitButton);
    this._validateInputs();
  }
}

export {FormValidator};