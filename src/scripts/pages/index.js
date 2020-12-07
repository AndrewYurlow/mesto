import FormValidator from '../components/FormValidator.js';
import {  
  formSelectors,
  handleCardClick,
  handleDeleteCard,
  formEditProfile,
  formAddCard,
  editButton,
  addButton,
  cards,
  getFormValues,
  cardTemplate,
  popupAddCardFormSelector,
  popupEditFormSelector,
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
  loadingData
} from '../utils/utils.js';
import PopupWithForm from '../components/PopupWithForm.js';
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

api.getUserInfo()
.then(data => {
  name.textContent = data.name;
  description.textContent = data.about;
  avatarImage.src = data.avatar;
  userId = data._id;
})
.catch(err => console.log(err));

api.getInitialCards()
.then(data => {
  const cardList = new Section({ 
    items: data,
    renderer: function(item) {
      return createCard(item, cardTemplate, handleCardClick, handleDeleteCard, userId, api);
    }
  }, cardsSelector);
  cardList.renderItems();
})
.catch(err => console.log(err));

const userData = new UserInfo(profileNameSelector, profileDescriptionSelector);

const editFormPopup = new PopupWithForm(
  popupEditFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    api.editProfileInfo(values)
    .then(data => {
      userData.setUserInfo(data.name, data.about);
    })
    .catch(err => console.log(err));
    editFormPopup.close();
  },
  loadingData);
editFormPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupAddCardFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    api.addNewCard(values)
    .then(data => {
      cards.prepend(createCard(data, cardTemplate, handleCardClick, handleDeleteCard, userId, api));
    })
    .catch(err => console.log(err));
    addCardPopup.close();
  },
  loadingData);
addCardPopup.setEventListeners();

const editAvatarPopup = new PopupWithForm(
  popupEditAvatarFormSelector,
  function(inputs) {
    const value = getFormValues(inputs);
    api.editAvatar(value)
    .then(data => {
      console.log(data);
      avatarImage.src = data.avatar;
    })
    .catch(err => console.log(err));
    editAvatarPopup.close();
  },
  loadingData);
editAvatarPopup.setEventListeners();

editButton.addEventListener('click', () => {
  const data = userData.getUserInfo();
  formEditProfile.querySelector('#name').value = data['name'];
  formEditProfile.querySelector('#description').value = data['description'];
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



