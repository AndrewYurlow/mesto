import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__container');
  }
  _getInputValues() {
    this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    this.values = {};
    this._inputs.forEach(item => {
      this.values[item.id] = item.value;
    });
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._getInputValues();
      this._submitCallback();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}