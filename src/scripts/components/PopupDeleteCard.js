import Popup from '../components/Popup.js';
export default class PopupDeleteCard extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector('.popup__container');
  }
  delete(eventDeleteClick, id, api) {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      eventDeleteClick.target.closest('.cards__item').remove();
      api.deleteCard(id).catch(err => console.log(err));
      this.close();
    });
    
  }
} 