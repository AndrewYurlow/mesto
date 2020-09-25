let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDecription = document.querySelector('.profile__description');
let closeButton = document.querySelector('.popup__close-button');
let editButton = document.querySelector('.profile__edit-button');

function openPopup() {
  let name = document.querySelector('.popup__input_type_name');
  let description = document.querySelector('.popup__input_type_description');
  popup.classList.add('popup_opened');
  name.setAttribute('value', profileName.textContent);
  description.setAttribute('value', profileDecription.textContent);
}

editButton.addEventListener('click', openPopup);

closeButton.addEventListener('click', function(){
  popup.classList.remove('popup_opened');
});



