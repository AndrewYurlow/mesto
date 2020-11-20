import PopupWithImage from '../components/PopupWithImage.js';

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
    link: './image/baikal.jpg'
  },
  {
    title: 'Владивосток',
    link: './image/vladivostok.jpg'
  },
  {
    title: 'Смоленск',
    link: './image/smolensk.jpg'
  },
  {
    title: 'Санкт-Петербург',
    link: './image/piter.jpg'
  },
  {
    title: 'Москва',
    link: './image/moskva.jpg'
  },
  {
    title: 'Карелия',
    link: './image/karelia.jpg'
  }
];

const formEditProfile = document.querySelector('.popup__container_type_edit-form');
const formAddCard = document.querySelector('.popup__container_type_add-card');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.add-button');
const cards = document.querySelector('.cards');

export { formSelectors, initialCards, handleCardClick, formEditProfile, formAddCard, editButton, addButton, cards };