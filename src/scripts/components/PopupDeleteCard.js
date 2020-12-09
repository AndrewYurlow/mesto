import Popup from '../components/Popup.js';
export default class PopupDeleteCard extends Popup {
  constructor(selector) {
    super(selector);
    this._form = this._popup.querySelector('.popup__container');
  }
  confirmDelete(eventDeleteClick, id, deleteCard) {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      eventDeleteClick.target.closest('.cards__item').remove();
      deleteCard(id);
      this.close();
    });
    
  }
} 