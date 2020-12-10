import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';

const popupViewImage = new PopupWithImage('.popup_type_view-image');
popupViewImage.setEventListeners();

const loadingData = (status, button) => {
  if (status) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = 'Сохранить';
  }
}

const handleCardClick = (link,name) => {
  popupViewImage.open(link,name);
}

const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__confirm-button',
  inactiveButtonClass: 'popup__confirm-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

const getFormValues = (inputs) => {
  const formValues = {};
  inputs.forEach(item => {
    formValues[item.id] = item.value;
  });
  return formValues;
}

const createCard = (data, cardTemplate, handleCardClick, handleDeleteClick, userId, like, removeLike) => {
  const newCard = new Card(data, cardTemplate, handleCardClick, handleDeleteClick, userId, like, removeLike);
  return newCard.generateCard(); 
}

const formEditProfile = document.querySelector('.popup__container_type_edit-form');
const formAddCard = document.querySelector('.popup__container_type_add-card');
const formEditAvatar = document.querySelector('.popup__container_type_edit-avatar');
const inputName = formEditProfile.querySelector('.popup__input_type_name');
const inputDescription = formEditProfile.querySelector('.popup__input_type_description');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.add-button');
const avatarEditButton = document.querySelector('.profile__avatar');
const cardTemplate = '.card-template';
const popupEditFormSelector = '.popup_type_edit-form';
const popupAddCardFormSelector = '.popup_type_add-card';
const popupEditAvatarFormSelector = '.popup_type_edit-avatar';
const popupDeleleteCardSelector = '.popup_type_delete-card';
const cardsSelector = '.cards';
const profileNameSelector = '.profile__name';
const profileDescriptionSelector = '.profile__description';
const profileAvatarSelector = '.profile__avatar-image';
const name = document.querySelector(profileNameSelector);
const description = document.querySelector(profileDescriptionSelector);
const avatarImage = document.querySelector(profileAvatarSelector);

export { 
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
  cardsSelector,
  profileNameSelector,
  profileDescriptionSelector,
  profileAvatarSelector,
  name,
  description,
  avatarImage,
  avatarEditButton,
  popupEditAvatarFormSelector,
  formEditAvatar,
  loadingData,
  inputName,
  inputDescription
};