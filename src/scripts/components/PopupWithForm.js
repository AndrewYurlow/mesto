import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback, loadingData) {
    super(selector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__container');
    this._confirmButton = this._form.querySelector('.popup__confirm-button');
    this._loadingData = loadingData;
  }
  _getInputValues() {
    this._inputs = Array.from(this._popup.querySelectorAll('.popup__input'));
    return this._inputs;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._loadingData(true, this._confirmButton);
      this._submitCallback(this._getInputValues());
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
  open() {
    super.open();
    this._loadingData(false, this._confirmButton);
  }
}