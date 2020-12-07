import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
  constructor(selector, submitCallback, loadingData) {
    super(selector);
    this._submitCallback = submitCallback;
    this._form = this._popup.querySelector('.popup__container');
    this._conformButton = this._form.querySelector('.popup__confirm-button');
    this._defaultText = this._conformButton.textContent;
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
      this._loadingData(true, this._conformButton, this._defaultText);
      this._submitCallback(this._getInputValues());
      this._loadingData(false, this._conformButton, this._defaultText);
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}