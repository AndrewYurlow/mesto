export default class Card{
  constructor(data, selector, handleCardClick){
    this._title = data.title;
    this._link = data.link;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
  }
  _handleLikeClick(event){
    event.target.classList.toggle('card__like-button_liked');
  }
  _handleDeleteClick(event){
    event.target.closest('.cards__item').remove();
    this._templateCard = null;
  }
  _setEventListeners(){
    this._templateCard.querySelector('.card__like-button').addEventListener('click', (evt) =>{
      this._handleLikeClick(evt);
    });
    this._templateCard.querySelector('.card__delete').addEventListener('click', (evt)=>{
      this._handleDeleteClick(evt);
    });
    this._cardImage.addEventListener('click', () =>{
      this._handleCardClick(this._link, this._title);
    });
  }
  _getTemplateCard(){
    const templateCard = document.querySelector(this._selector).content.cloneNode(true);
    return templateCard;
  }
  generateCard(){
    this._templateCard = this._getTemplateCard();
    this._cardImage = this._templateCard.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}`;
    this._templateCard.querySelector('.card__title').textContent = this._title;
    this._setEventListeners();
    return this._templateCard;
  }
}