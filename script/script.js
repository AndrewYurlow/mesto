let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDecription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_type_name');
let inputDescription = document.querySelector('.popup__input_type_description');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');
let popupSaveButton = document.querySelector('.popup__save-button');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
}
function closePopup() {
  inputName.value = '';
  inputDescription.value = '';
  popup.classList.remove('popup_opened');
}
function saveProfileSettings(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
popupSaveButton.addEventListener('click', saveProfileSettings);


