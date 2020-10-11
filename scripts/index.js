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
const closeEditForm = document.querySelector('.popup__close-button_type_edit-form');
const closeAddCard = document.querySelector('.popup__close-button_type_add-card');
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

const prepareCard = (item) => {
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.card__image').src = item.link;
  card.querySelector('.card__title').textContent = item.name;
  return card;
}
const showCards = (array) => {
  array.forEach((item) => {
    const card = prepareCard(item);
    cards.append(card);
  });
}
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}
function saveProfileSettings(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileDecription.textContent = inputDescription.value;
  togglePopup(popupEditForm);
}
function addUserCard(event) {
  event.preventDefault();
  const userCard = {
    name: `${inputPlaceTitle.value}`,
    link: `${inputPlaceLink.value}`
  };
  initialCards.splice(0, 0, userCard);
  cards.prepend(prepareCard(userCard));
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
closeEditForm.addEventListener('click', () => {
  togglePopup(popupEditForm);
});
closeAddCard.addEventListener('click', () => {
  togglePopup(popupAddCard);
});
formEditProfile.addEventListener('submit', saveProfileSettings);
formAddCard.addEventListener('submit', addUserCard);
showCards(initialCards);



