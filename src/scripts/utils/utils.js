import Card from '../components/Card.js';
<<<<<<< HEAD
=======
import PopupDeleteCard from '../components/PopupDeleteCard.js';
>>>>>>> master
import PopupWithImage from '../components/PopupWithImage.js';

const popupViewImage = new PopupWithImage('.popup_type_view-image');
popupViewImage.setEventListeners();

const popupDeleteCard = new PopupDeleteCard('.popup_type_delete-card');
popupDeleteCard.setEventListeners();

const loadingData = (status, button, defaultText) => {
  if (status) {
    button.textContent = 'Сохранение...';
  } else {
    button.textContent = defaultText;
  }
}

const handleCardClick = (link,name) => {
  popupViewImage.open(link,name);
}

const handleDeleteCard = (evt, id, api) => {
  popupDeleteCard.open();
  popupDeleteCard.delete(evt, id, api);
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

const createCard = (data, cardTemplate, handle, handleDelete, userId, api) => {
  const newCard = new Card(data, cardTemplate, handle, handleDelete, userId, api);
  return newCard.generateCard(); 
}

const getFormValues = (inputs) => {
  const formValues = {};
  inputs.forEach(item => {
    formValues[item.id] = item.value;
  });
  return formValues;
}

const createCard = (data, cardTemplate, handle) => {
  const newCard = new Card(data, cardTemplate, handle);
  return newCard.generateCard(); 
}

const formEditProfile = document.querySelector('.popup__container_type_edit-form');
const formAddCard = document.querySelector('.popup__container_type_add-card');
const formEditAvatar = document.querySelector('.popup__container_type_edit-avatar');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.add-button');
const avatarEditButton = document.querySelector('.profile__avatar');
const cards = document.querySelector('.cards');
const cardTemplate = '.card-template';
<<<<<<< HEAD
const profileName = '.profile__name';
const profileDescription = '.profile__description';
const popupEditFormSelector = '.popup_type_edit-form';
const popupAddCardFormSelector = '.popup_type_add-card';

export { 
  formSelectors, 
  initialCards, 
  handleCardClick, 
=======
const popupEditFormSelector = '.popup_type_edit-form';
const popupAddCardFormSelector = '.popup_type_add-card';
const popupEditAvatarFormSelector = '.popup_type_edit-avatar';
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
  handleDeleteCard, 
>>>>>>> master
  formEditProfile, 
  formAddCard, 
  editButton, 
  addButton, 
  cards, 
  getFormValues, 
  cardTemplate, 
<<<<<<< HEAD
  profileName, 
  profileDescription ,
  popupAddCardFormSelector,
  popupEditFormSelector,
  createCard
=======
  popupAddCardFormSelector,
  popupEditFormSelector,
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
  loadingData
>>>>>>> master
};