import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__container');
  }
  _getInputValues() {
    this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    return this._inputs;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}