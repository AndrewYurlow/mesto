let popup = document.querySelector('.popup');
let formEditProfile = document.querySelector('.popup__container_type_edit-form');
const formAddCard = document.querySelector('.popup__container_type_add-card');
let profileName = document.querySelector('.profile__name');
let profileDecription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_type_name');
let inputDescription = document.querySelector('.popup__input_type_description');
const inputPlaceTitle = document.querySelector('.popup__input_type_place-title');
const inputPlaceLink = document.querySelector('.popup__input_type_place-link');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.add-button');

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

function openPopup() {
  popup.classList.add('popup_opened');
}
function closePopup() {
  popup.classList.remove('popup_opened');
  formEditProfile.style.display = 'none';
  formAddCard.style.display = 'none';
}
function saveProfileSettings(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  closePopup();
}
editButton.addEventListener('click', () => {
  openPopup();
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
  formEditProfile.style.display = 'flex';
});
addButton.addEventListener('click', () =>{
  openPopup();
  formAddCard.style.display = 'flex';
});
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', saveProfileSettings);
popup.addEventListener('click', function(event){
  if(event.target === event.currentTarget){
    closePopup();
  }
});



