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

const hasInvalidInput = (input) => {
  if(!input.validity.valid){
    return true;
  }else{
    return false;
  }
}
const disableSubmitButton = (submit) =>{
  submit.setAttribute('disabled', true);
  submit.classList.add('popup__save-button_disabled');
}
const turnOnSubmitButton = (submit) =>{
  submit.removeAttribute('disabled');
  submit.classList.remove('popup__save-button_disabled');
}
const showErrorMessage = (error, errorInput) => {
  error.classList.add('popup__input-error_active');
  error.textContent = errorInput.validationMessage;
}
const clearErrorMessage = (error) => {
  error.classList.remove('popup__input-error_active');
  error.textContent = '';
}
const checkFormInputs = form => {
  const inputList = Array.from(form.querySelectorAll('.popup__input'));
  const submitButton = form.querySelector('.popup__save-button');
  inputList.forEach(inputElement => {
    const errorMessage = form.querySelector(`#${inputElement.id}-error`);
    inputElement.addEventListener('input', () => {
      if(hasInvalidInput(inputElement)){
        showErrorMessage(errorMessage, inputElement);
        disableSubmitButton(submitButton);
      }else{
        clearErrorMessage(errorMessage);
        turnOnSubmitButton(submitButton);
      }
    });
  });
}
const validateForm = (popup) => {
  const form = popup.querySelector('.popup__container');
  checkFormInputs(form);
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
  validateForm(popup);
}
const closePopup = (popup) => {
  popup.classList.remove('popup_opened');
  const errorList = popup.querySelectorAll('.popup__input-error');
  const submitButton = popup.querySelector('.popup__save-button');
  errorList.forEach(err => {
    clearErrorMessage(err);
  });
  turnOnSubmitButton(submitButton);
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
  openPopup(popupEditForm);
});
addButton.addEventListener('click', () => {
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
})
formEditProfile.addEventListener('submit', saveProfileSettings);
formAddCard.addEventListener('submit', addUserCard);
displayCards(initialCards, cards);




