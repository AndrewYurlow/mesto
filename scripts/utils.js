const popupViewImage = document.querySelector('.popup_type_view-image');
const popupList = Array.from(document.querySelectorAll('.popup')); 
const formSelectors = {
  formSelector: '.popup__container',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error'
}

function openPopup(popup){
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setKeyClose);
}

function setKeyClose (evt){
  const currentPopup = popupList.find(popup => {
    return popup.classList.contains('popup_opened');
  });
  if(evt.key === 'Escape'){
    closePopup(currentPopup);
  }
}

function closePopup(popup){
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setKeyClose);
}

function handleViewImageClick(popup, link, name) {
  popup.querySelector('.popup__picture').src = link;
  popup.querySelector('.popup__picture').alt = `Место ${name}`;
  popup.querySelector('.popup__description').textContent = name;
  openPopup(popup);
}

export {popupViewImage, handleViewImageClick, openPopup, closePopup, popupList, formSelectors};