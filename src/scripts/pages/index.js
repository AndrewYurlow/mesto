import FormValidator from '../components/FormValidator.js';
import {  
  formSelectors,
  handleCardClick,
  formEditProfile,
  formAddCard,
  editButton,
  addButton,
  getFormValues,
  cardTemplate,
  popupAddCardFormSelector,
  popupEditFormSelector,
  popupDeleleteCardSelector,
  createCard,
  profileNameSelector,
  profileDescriptionSelector,
  name,
  description,
  avatarImage,
  cardsSelector,
  avatarEditButton,
  popupEditAvatarFormSelector,
  formEditAvatar,
  loadingData,
  inputName,
  inputDescription,
  profileAvatarSelector
} from '../utils/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupDeleteCard from '../components/PopupDeleteCard.js';
import UserInfo from '../components/UserInfo.js';
import '../../styles/index.css';
import Api from '../components/Api.js';
import Section from '../components/Section.js';

let userId;

const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-18',
  headers: {
      authorization: ' 4d6e7aee-cfb5-438f-a3a9-de59aa3a3ab3',
      'Content-Type': 'application/json'
    }
});

const like = (id, likeCounter, likeButton) => {
  api.like(id)
  .then(data => {
    likeCounter.textContent = data.likes.length;
    likeButton.classList.add('card__like-button_liked');
  })
  .catch(err => console.log(err));
}

const removeLike = (id, likeCounter, likeButton) => {
  api.removeLike(id)
  .then(data => {
    likeCounter.textContent = data.likes.length;
    likeButton.classList.remove('card__like-button_liked');
  })
  .catch(err => console.log(err));
}

const popupDeleteCard = new PopupDeleteCard(
  popupDeleleteCardSelector,
  function(id, evt) {
    api.deleteCard(id)
    .then(
      evt.target.closest('.cards__item').remove(),
      popupDeleteCard.close()
    )
    .catch(err => console.log(err));
  }
);
popupDeleteCard.setEventListeners();

const handleDeleteClick = (id, evt) => {
  popupDeleteCard.open();
  popupDeleteCard.getCardData(id, evt);
}

const userInfoPromise = api.getUserInfo();
const initialCardPromise = api.getInitialCards();
Promise.all([ userInfoPromise, initialCardPromise ])
.then(data => {
  const [ userData, cards ] = data;
  
  name.textContent = userData.name;
  description.textContent = userData.about;
  avatarImage.src = userData.avatar;
  userId = userData._id;

  const cardList = new Section({ 
    items: cards,
    renderer: function(item) {
      return createCard(item, cardTemplate, handleCardClick, handleDeleteClick, userId, like, removeLike);
    }
  }, cardsSelector);
  cardList.renderItems();
})
.catch(err => console.log(err));

const userData = new UserInfo(profileNameSelector, profileDescriptionSelector, profileAvatarSelector);

const editFormPopup = new PopupWithForm(
  popupEditFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    api.editProfileInfo(values)
    .then(data => {
      userData.setUserInfo(data.name, data.about);
      editFormPopup.close();
    })
    .catch(err => console.log(err));
  },
  loadingData);
editFormPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupAddCardFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    api.addNewCard(values)
    .then(data => {
      const newCard = new Section({
        items: data,
        renderer: function(item) {
          return createCard(item, cardTemplate, handleCardClick, handleDeleteClick, userId, like, removeLike);
        }
       }, cardsSelector);
      newCard.renderNewItem();
      addCardPopup.close();
    })
    .catch(err => console.log(err));
  },
  loadingData);
addCardPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  popupEditAvatarFormSelector,
  function(inputs) {
    const value = getFormValues(inputs);
    api.editAvatar(value)
    .then(data => {
      userData.setUserAvatar(data.avatar);
      editAvatarPopup.close();
    })
    .catch(err => console.log(err));
  },
  loadingData);
editAvatarPopup.setEventListeners();

editButton.addEventListener('click', () => {
  const data = userData.getUserInfo();
  inputName.value = data['name'];
  inputDescription.value = data['description'];
  formEditProfileValidator.clearValidation();
  editFormPopup.open();
});
addButton.addEventListener('click', () => {
  formAddCardValidator.clearValidation();
  addCardPopup.open();
});
avatarEditButton.addEventListener('click', () => {
  formEditAvatarValidator.clearValidation();
  editAvatarPopup.open();
});

const formAddCardValidator = new FormValidator(formAddCard, formSelectors);
const formEditProfileValidator = new FormValidator(formEditProfile, formSelectors);
const formEditAvatarValidator = new FormValidator(formEditAvatar, formSelectors);
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();
formEditAvatarValidator.enableValidation();



