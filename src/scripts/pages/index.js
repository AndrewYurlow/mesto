import FormValidator from '../components/FormValidator.js';
import {  
  formSelectors,
  initialCards,
  handleCardClick,
  formEditProfile,
  formAddCard,
  editButton,
  addButton,
  cards,
  getFormValues,
  cardTemplate,
  profileName,
  profileDescription,
  popupAddCardFormSelector,
  popupEditFormSelector,
  createCard,
  cardsSelector
} from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../../styles/index.css';

const userData = new UserInfo(profileName, profileDescription);

const cardList = new Section({ 
  items: initialCards,
  renderer: function(item) {
    return createCard(item, cardTemplate, handleCardClick);
  }
}, cardsSelector);

const editFormPopup = new PopupWithForm(
  popupEditFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    userData.setUserInfo(values['name'], values['description']);
    editFormPopup.close();
  });
editFormPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  popupAddCardFormSelector,
  function(inputs) {
    const values = getFormValues(inputs);
    cards.prepend(createCard(values, cardTemplate, handleCardClick));
    addCardPopup.close();
  });
addCardPopup.setEventListeners();

editButton.addEventListener('click', () => {
  const data = userData.getUserInfo();
  formEditProfile.querySelector('#name').value = data['name'];
  formEditProfile.querySelector('#description').value = data['description'];
  formEditProfileValidator.clearValidation();
  editFormPopup.open();
});
addButton.addEventListener('click', () => {
  formAddCardValidator.clearValidation();
  addCardPopup.open();
});

const formAddCardValidator = new FormValidator(formAddCard, formSelectors);
const formEditProfileValidator = new FormValidator(formEditProfile, formSelectors);
cardList.renderItems();
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();



