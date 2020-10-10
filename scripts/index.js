const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const formEditProfile = document.querySelector('.popup__container_type_edit-form');
const editButton = document.querySelector('.profile__edit-button');
const inputName = document.querySelector('.popup__input_type_name');
const inputDescription = document.querySelector('.popup__input_type_description');
const profileName = document.querySelector('.profile__name');
const profileDecription = document.querySelector('.profile__description');
const addButton = document.querySelector('.add-button');
const closeEditForm = document.querySelector('.popup__close-button_type_edit-form');
const closeAddCard = document.querySelector('.popup__close-button_type_add-card');
const inputPlaceTitle = document.querySelector('.popup__input_type_place-title');
const inputPlaceLink = document.querySelector('.popup__input_type_place-link');

const initialCards = [
  {
    name: 'Озеро Байкал',
    link: '../image/baikal.jpg'
  },
  {
    name: 'Владивосток',
    link: '../image/vladivostok.jpg'
  },
  {
    name: 'Смоленск',
    link: '../image/smolensk.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: '../image/piter.jpg'
  },
  {
    name: 'Москва',
    link: '../image/moskva.jpg'
  },
  {
    name: 'Карелия',
    link: '../image/karelia.jpg'}];

function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}
function saveProfileSettings(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  togglePopup(popupEditForm);
}
editButton.addEventListener('click', () => {
  togglePopup(popupEditForm);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
});
addButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
closeEditForm.addEventListener('click', () => {
  togglePopup(popupEditForm);
});
closeAddCard.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
formEditProfile.addEventListener('submit', saveProfileSettings);



