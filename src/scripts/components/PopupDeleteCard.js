import Popup from '../components/Popup.js';
export default class PopupDeleteCard extends Popup {
  constructor(selector, submitCallback) {
    super(selector);
    this._form = this._popup.querySelector('.popup__container');
    //this._confirmButton = this._form.querySelector('.popup__confirm-button');
    this._submitCallback = submitCallback;
  }
  getCardData(id, evt) {
    this._id = id;
    this._evt = evt;
  }
  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitCallback(this._id, this._evt);
    });
  }
}