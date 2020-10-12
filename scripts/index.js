const popupEditForm = document.querySelector('.popup_type_edit-form');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupViewImage = document.querySelector('.popup_type_view-image');
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

const initialCards = [
  {
    name: 'Озеро Байкал',
    link: './image/baikal.jpg'
  },
  {
    name: 'Владивосток',
    link: './image/vladivostok.jpg'
  },
  {
    name: 'Смоленск',
    link: './image/smolensk.jpg'
  },
  {
    name: 'Санкт-Петербург',
    link: './image/piter.jpg'
  },
  {
    name: 'Москва',
    link: './image/moskva.jpg'
  },
  {
    name: 'Карелия',
    link: './image/karelia.jpg'}];

const addDeleteCardEvent = (card, userCardObject, deleteButton) => {
  deleteButton.addEventListener('click', event => {
    event.preventDefault();
    deleteButton.closest('.cards__item').remove();
    const cardIndex = initialCards.indexOf(userCardObject);
    initialCards.splice(cardIndex, 1);
  });
}
const addLikeCardEvent = (card, likeButton) => {
  likeButton.addEventListener('click', event => {
    event.preventDefault();
    likeButton.classList.toggle('card__like-button_liked');
  });
}
const addPopupViewImageEvent = (card, cardImage, cardTitle) => {
  cardImage.addEventListener('click', () => {
    document.querySelector('.popup__picture').src = cardImage.src;
    document.querySelector('.popup__description').textContent = cardTitle.textContent;
    togglePopup(popupViewImage);
  });
}
const makeCard = (userCardObject) => {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardTitle = card.querySelector('.card__title');
  const likeButton = card.querySelector('.card__like-button');
  const deleteButton = card.querySelector('.card__delete');
  cardImage.src = userCardObject.link;;
  cardTitle.textContent = userCardObject.name;
  addPopupViewImageEvent(card, cardImage, cardTitle);
  addLikeCardEvent(card, likeButton);
  addDeleteCardEvent(card, userCardObject, deleteButton);
  return card;
}
const displayCards = (array) => {
  array.forEach((item) => {
    const card = makeCard(item);
    cards.append(card);
  });
}
const togglePopup = (popup) => {
  popup.classList.toggle('popup_opened');
}
const saveProfileSettings = (event) => {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  togglePopup(popupEditForm);
}
const addUserCard = (event) => {
  event.preventDefault();
  const userCard = {
    name: `${inputPlaceTitle.value}`,
    link: `${inputPlaceLink.value}`
  };
  initialCards.splice(0, 0, userCard);
  cards.prepend(makeCard(userCard));
  togglePopup(popupAddCard);
}
editButton.addEventListener('click', () => {
  togglePopup(popupEditForm);
  inputName.value = profileName.textContent;
  inputDescription.value = profileDecription.textContent;
});
addButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
closeEditFormButton.addEventListener('click', () => {
  togglePopup(popupEditForm);
});
closeAddCardButton.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
closeViewImageButton.addEventListener('click', () => {
  togglePopup(popupViewImage);
})
formEditProfile.addEventListener('submit', saveProfileSettings);
formAddCard.addEventListener('submit', addUserCard);
displayCards(initialCards);



