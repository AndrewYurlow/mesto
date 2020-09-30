let popup = document.querySelector('.popup');
let form = document.querySelector('.popup__container');
let profileName = document.querySelector('.profile__name');
let profileDecription = document.querySelector('.profile__description');
let inputName = document.querySelector('.popup__input_type_name');
let inputDescription = document.querySelector('.popup__input_type_description');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
}
function closePopup() {
  popup.classList.remove('popup_opened');
}
function saveProfileSettings(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  closePopup();
}

editButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
form.addEventListener('submit', saveProfileSettings);
popup.addEventListener('click', function(event){
  if(event.target === event.currentTarget){
    closePopup();
  }
});



