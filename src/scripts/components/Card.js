export default class Card{
  constructor(data, selector, handleCardClick, handleDeleteCard, userId, api){
    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._selector = selector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._userId = userId;
    this._cardOwner = data.owner._id;
    this._cardId = data._id;
    this._api = api;
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
      this._api.like(this._cardId)
      .then(data => {
        console.log(this._likes);
        this._likeCounter.textContent = data.likes.length;
      })
      .catch(err => console.log(err));
      this._likeButton.classList.add('card__like-button_liked');
    } else {
      this._api.removeLike(this._cardId)
      .then(data => {
        this._likeCounter.textContent = data.likes.length;
      })
      .catch(err => console.log(err));;
      this._likeButton.classList.remove('card__like-button_liked');
    }
  }
  _setEventListeners(){
    this._templateCard.querySelector('.card__like-button').addEventListener('click', (evt) =>{
      this._handleLikeClick(evt);
    });
    this._templateCard.querySelector('.card__delete').addEventListener('click', (evt)=>{
      this._handleDeleteCard(evt, this._cardId, this._api);
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
    this._toggleDeleteButton();
    this._toggleLikeButton();
    this._cardImage = this._templateCard.querySelector('.card__image');
    this._cardImage.src = this._link;
    this._cardImage.alt = `${this._title}`;
    this._templateCard.querySelector('.card__title').textContent = this._title;
    this._templateCard.querySelector('.card__like-counter').textContent = this._likes.length;
    this._setEventListeners();
    return this._templateCard;
  }
}