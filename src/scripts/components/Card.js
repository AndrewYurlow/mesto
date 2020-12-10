export default class Card{
  constructor(data, selector, handleCardClick, handleDeleteClick, userId, like, removeLike){
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._userId = userId;
    this._cardOwner = data.owner._id;
    this._cardId = data._id;
    this._like = like;
    this._removeLike = removeLike;
  }
  _toggleDeleteButton() {
    if (this._userId !== this._cardOwner) {
      this._deleteButton = this._templateCard.querySelector('.card__delete');
      this._deleteButton.setAttribute('disabled', true);
      this._deleteButton.classList.add('card__delete_disabled');
    } 
  }
  _toggleLikeButton() {
    const isLiked = this._likes.find(item => {
      return item._id === this._userId;
    });
    if (isLiked) {
      this._templateCard.querySelector('.card__like-button').classList.add('card__like-button_liked');
    }
  }
  _handleLikeClick(event){
    this._likeButton = event.target;
    this._likeCounter = this._likeButton.closest('.card').querySelector('.card__like-counter');
    if (!this._likeButton.classList.contains('card__like-button_liked')) {
      this._like(this._cardId, this._likeCounter, this._likeButton);
    } else {
      this._removeLike(this._cardId, this._likeCounter, this._likeButton);
    }
  }
  _setEventListeners(){
    this._templateCard.querySelector('.card__like-button').addEventListener('click', (evt) =>{
      this._handleLikeClick(evt);
    });
    this._templateCard.querySelector('.card__delete').addEventListener('click', (evt)=>{
      this._handleDeleteClick(this._cardId, evt);
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
    this._likeCounter = this._templateCard.querySelector('.card__like-counter');
    this._toggleDeleteButton();
    this._toggleLikeButton();
    this._cardImage = this._templateCard.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}`;
    this._templateCard.querySelector('.card__title').textContent = this._title;
    this._likeCounter.textContent = this._likes.length;
    this._setEventListeners();
    return this._templateCard;
  }
}