import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
const baikalImage = new URL('../../image/baikal.jpg', import.meta.url);
const vladivostokImage = new URL('../../image/vladivostok.jpg', import.meta.url);
const smolenskImage = new URL('../../image/smolensk.jpg', import.meta.url);
const piterImage = new URL('../../image/piter.jpg', import.meta.url);
const moskvaImage = new URL('../../image/moskva.jpg', import.meta.url);
const kareliaImage = new URL('../../image/karelia.jpg', import.meta.url);

const popupViewImage = new PopupWithImage('.popup_type_view-image');
popupViewImage.setEventListeners();

const handleCardClick = (link, title) => {
  popupViewImage.open(link, title);
}

const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

const initialCards = [
  {
    title: 'Озеро Байкал',
    link: baikalImage
  },
  {
    title: 'Владивосток',
    link: vladivostokImage
  },
  {
    title: 'Смоленск',
    link: smolenskImage
  },
  {
    title: 'Санкт-Петербург',
    link: piterImage
  },
  {
    title: 'Москва',
    link: moskvaImage
  },
  {
    title: 'Карелия',
    link: kareliaImage
  }
];

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
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.add-button');
const cards = document.querySelector('.cards');
const cardTemplate = '.card-template';
const profileName = '.profile__name';
const profileDescription = '.profile__description';
const popupEditFormSelector = '.popup_type_edit-form';
const popupAddCardFormSelector = '.popup_type_add-card';
const cardsSelector = '.cards';

export { 
  formSelectors, 
  initialCards, 
  handleCardClick, 
  formEditProfile, 
  formAddCard, 
  editButton, 
  addButton, 
  cards, 
  getFormValues, 
  cardTemplate, 
  profileName, 
  profileDescription ,
  popupAddCardFormSelector,
  popupEditFormSelector,
  createCard,
  cardsSelector
};