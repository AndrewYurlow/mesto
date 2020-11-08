import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {initialCards} from './initial-cards.js';
import {popupViewImage, handleViewImageClick, openPopup, closePopup, popupList} from './utils.js';

const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formEditProfile = document.querySelector('.popup__container_type_edit-form');
const formAddCard = document.querySelector('.popup__container_type_add-card');
const editButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDecription = document.querySelector('.profile__description');
const addButton = document.querySelector('.add-button');
const closeEditFormButton = document.querySelector('.popup__close-button_type_edit-form');
const closeAddCardButton = document.querySelector('.popup__close-button_type_add-card');
const closeViewImageButton = document.querySelector('.popup__close-button_type_view-image');
const inputPlaceTitle = document.querySelector('.popup__input_type_place-title');
const inputPlaceLink = document.querySelector('.popup__input_type_place-link');
const cards = document.querySelector('.cards');

const displayCards = (array, container) => {
  array.forEach((item) => {
    const card = new Card(item, '.card-template', handleViewImageClick);
    container.append(card.generateCard());
  });
}
const saveProfileSettings = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  closePopup(popupEditForm);
}
const addUserCard = (event) => {
  event.preventDefault();
  const userData = {
    name: `${inputPlaceTitle.value}`,
    link: `${inputPlaceLink.value}`
  };
  const userCard = new Card(userData, '.card-template', handleViewImageClick);
  cards.prepend(userCard.generateCard());
  closePopup(popupAddCard);
}
editButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
  const formValidator = new FormValidator(formEditProfile);
  formValidator.enableValidation();
  openPopup(popupEditForm);
});
addButton.addEventListener('click', () => {
  inputPlaceTitle.value = '';
  inputPlaceLink.value = '';
  const formValidator = new FormValidator(formAddCard);
  formValidator.enableValidation();
  openPopup(popupAddCard);
});
closeEditFormButton.addEventListener('click', () => {
  closePopup(popupEditForm);
});
closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
});
closeViewImageButton.addEventListener('click', () => {
  closePopup(popupViewImage);
});
formEditProfile.addEventListener('submit', evt => {
  saveProfileSettings(evt);
});
formAddCard.addEventListener('submit', addUserCard);
popupList.forEach(popup =>{
  popup.addEventListener('click', evt => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
    }
  });
});
displayCards(initialCards, cards);



