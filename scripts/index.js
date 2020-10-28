const popupList = Array.from(document.querySelectorAll('.popup')); 
const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupViewImage = document.querySelector('.popup_type_view-image');
const pictureOfPopup = document.querySelector('.popup__picture');
const descriptionOfPopup = document.querySelector('.popup__description');
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
const cardTemplate = document.querySelector('.card-template').content;
const cards = document.querySelector('.cards');
const submitEditForm = popupEditForm.querySelector('.popup__save-button');
const submitAddCard = popupAddCard.querySelector('.popup__save-button');

const clearInputErrors = (popup) => {
  Array.from(popup.querySelectorAll('.popup__input')).forEach(input =>{
    hideError(input, formSelectors.inputErrorClass);
  });
}
const setKeyClose = (evt) => {
  const currentPopup = popupList.find(popup => {
    return popup.classList.contains('popup_opened');
  });
  if(evt.key === 'Escape'){
    closePopup(currentPopup);
    clearInputErrors(currentPopup);
  }
}
const addDeleteCardEvent = (deleteButton) => {
  deleteButton.addEventListener('click', event => {
    event.preventDefault();
    deleteButton.closest('.cards__item').remove();
  });
}
const addLikeCardEvent = (likeButton) => {
  likeButton.addEventListener('click', event => {
    event.preventDefault();
    likeButton.classList.toggle('card__like-button_liked');
  });
}
const addPopupViewImageEvent = (cardImage, cardTitle) => {
  cardImage.addEventListener('click', () => {
    pictureOfPopup.src = cardImage.src;
    pictureOfPopup.alt = `Место '${cardTitle.textContent}'`;
    descriptionOfPopup.textContent = cardTitle.textContent;
    openPopup(popupViewImage);
  });
}
const makeCard = (userCardObject) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete');
  cardImage.src = userCardObject.link;
  cardImage.alt = `${userCardObject.name}`;
  cardTitle.textContent = userCardObject.name;
  addPopupViewImageEvent(cardImage, cardTitle);
  addLikeCardEvent(likeButton);
  addDeleteCardEvent(deleteButton);
  return card;
}
const displayCards = (array, container) => {
  array.forEach((item) => {
    const card = makeCard(item);
    container.append(card);
  });
}
const openPopup = (popup) => {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', setKeyClose);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', setKeyClose);
}
const saveProfileSettings = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  closePopup(popupEditForm);
}
const addUserCard = (event) => {
  event.preventDefault();
  const userCard = {
    name: `${inputPlaceTitle.value}`,
    link: `${inputPlaceLink.value}`
  };
  cards.prepend(makeCard(userCard));
  closePopup(popupAddCard);
}
editButton.addEventListener('click', () => {
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
  toggleButton(submitEditForm, formSelectors.inactiveButtonClass, formEditProfile);
  openPopup(popupEditForm);
});
addButton.addEventListener('click', () => {
  inputPlaceTitle.value = '';
  inputPlaceLink.value = '';
  toggleButton(submitAddCard, formSelectors.inactiveButtonClass, formAddCard);
  openPopup(popupAddCard);
});
closeEditFormButton.addEventListener('click', () => {
  closePopup(popupEditForm);
  clearInputErrors(popupEditForm);
});
closeAddCardButton.addEventListener('click', () => {
  closePopup(popupAddCard);
  clearInputErrors(popupAddCard);
});
closeViewImageButton.addEventListener('click', () => {
  closePopup(popupViewImage);
})
formEditProfile.addEventListener('submit', evt => {
  saveProfileSettings(evt);
});
formAddCard.addEventListener('submit', addUserCard);
popupList.forEach(popup =>{
  popup.addEventListener('click', evt => {
    if(evt.target === evt.currentTarget){
      closePopup(popup);
      clearInputErrors(popup);
    }
  });
});
displayCards(initialCards, cards);
enableValidation(formSelectors);




