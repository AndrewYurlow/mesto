import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
  constructor(selector) {
    super(selector);
    this._popupPicture = this._popup.querySelector('.popup__picture');
  }
  open(link, name) {
    this._popupPicture.src = link;
    this._popupPicture.alt = `Место ${name}`;
    this._popup.querySelector('.popup__description').textContent = name;
    super.open();
  }
}