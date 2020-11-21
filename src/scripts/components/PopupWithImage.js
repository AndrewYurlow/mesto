import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
  }
  open(link, name) {
    this._popup.querySelector('.popup__picture').src = link;
    this._popup.querySelector('.popup__picture').alt = `Место ${name}`;
    this._popup.querySelector('.popup__description').textContent = name;
    super.open();
  }
}