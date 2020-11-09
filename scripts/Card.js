import { popupViewImage, handleViewImageClick } from './utils.js';
export class Card{
  constructor(data, selector, handleViewImageClick){
    this._name = data.name;
    this._link = data.link;
    this._selector = selector;
  }
  _handleLikeClick(event){
    //event.preventDefault();
    event.target.classList.toggle('card__like-button_liked');
  }
  _handleDeleteClick(event){
    //event.preventDefault();
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
    this._templateCard.querySelector('.card__image').addEventListener('click', () =>{
      handleViewImageClick(popupViewImage, this._link, this._name);
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
    this._cardImage.alt = `${this._name}`;
    this._templateCard.querySelector('.card__title').textContent = this._name;
    this._setEventListeners();
    return this._templateCard;
  }
}