import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import {  
  formSelectors,
  initialCards,
  handleCardClick,
  formEditProfile,
  formAddCard,
  editButton,
  addButton,
  cards
} from '../utils/utils.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import '../../styles/index.css';

const userData = new UserInfo('.profile__name', '.profile__description');

const cardList = new Section({ 
  items: initialCards,
  renderer: function(item) {
    const card = new Card(item, '.card-template', handleCardClick);
    return card.generateCard();
  }
}, '.cards');

const editFormPopup = new PopupWithForm(
  '.popup_type_edit-form',
  function() {
    userData.setUserInfo(this.values['name'], this.values['description']);
    editFormPopup.close();
  });
editFormPopup.setEventListeners();

const addCardPopup = new PopupWithForm(
  '.popup_type_add-card',
  function() {
    const userCard = new Card(this.values, '.card-template', handleCardClick);
    cards.prepend(userCard.generateCard());
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



