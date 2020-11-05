export class Card{
  constructor(data, selector){
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }
  _handleLikeClick(event){
    event.preventDefault();
    event.target.classList.toggle('card__like-button_liked');
  }
  _handleDeleteClick(event){
    event.preventDefault();
    event.target.closest('.cards__item').remove();
  }
  _handleViewImageClick(){
    const popupViewImage = document.querySelector('.popup_type_view-image');
    popupViewImage.querySelector('.popup__picture').src = this._link;
    popupViewImage.querySelector('.popup__picture').alt = `Место ${this._name}`;
    popupViewImage.querySelector('.popup__description').textContent = this._name;
    popupViewImage.classList.add('popup_opened');
  }
  _setEventListeners(){
    this._templateCard.querySelector('.card__like-button').addEventListener('click', (evt) =>{
      this._handleLikeClick(evt);
    });
    this._templateCard.querySelector('.card__delete').addEventListener('click', (evt)=>{
      this._handleDeleteClick(evt);
    });
    this._templateCard.querySelector('.card__image').addEventListener('click', () =>{
      this._handleViewImageClick();
    });
  }
  _getTemplateCard(){
    const templateCard = document.querySelector(this._selector).content.cloneNode(true);
    return templateCard;
  }
  generateCard(){
    this._templateCard = this._getTemplateCard();
    this._templateCard.querySelector('.card__image').src = this._link;
    this._templateCard.querySelector('.card__image').alt = `${this._name}`;
    this._templateCard.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._templateCard;
  }
}