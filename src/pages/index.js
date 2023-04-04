import { FormValidator, validatorConfig } from "../components/FormValidator.js";
import { initialCards, editButton, addButton, popName, popUpdescription, formElementAccount, nameInput, jobInput, formElementCard } from "../components/utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

import './index.css';

const cardItemValidate = new FormValidator(validatorConfig, formElementCard);
cardItemValidate.enableValidation();
const profileEditeValidate = new FormValidator(validatorConfig, formElementAccount);
profileEditeValidate.enableValidation();

const standartCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const cardElement = createCard(item);

      standartCards.addItem(cardElement);
    },
  },
  ".elements__section-elements"
);

const popupCardWithForm = new PopupWithForm(".popup_type_card", {
  callbackSubmitForm: (cardData) => {
    const newCard = createCard({ name: cardData["input-name"], link: cardData["input-description"] });

    standartCards.addItem(newCard);

    popupCardWithForm.close();
  },
});

standartCards.renderItems();

popupCardWithForm.setEventListeners();

function createCard(item) {
  const newCard = new Card(
    {
      data: item,
      handleCardClick: (name, link) => {
        popupCardWithImage.open(name, link);
      },
    },
    "#card-template"
  );
  const cardElement = newCard.randerCard();
  return cardElement;
}

addButton.addEventListener("click", () => {
  popupCardWithForm.open();
  cardItemValidate.resetValidation();
});

const editInfo = new UserInfo({ selectorUserName: ".profile__title", selectorUserAbout: ".profile__description" });

const popupEditProfile = new PopupWithForm(".popup_type_account", {
  callbackSubmitForm: (userInfo) => {
    editInfo.setUserInfo({ userName: userInfo["input-name"], userDescription: userInfo["input-description"] });
    popupEditProfile.close();
  },
});

popupEditProfile.setEventListeners();

editButton.addEventListener("click", () => {
  const userData = editInfo.getUserInfo();
  popupEditProfile.open();
  profileEditeValidate.resetValidation();
  nameInput.value = userData.userName;
  jobInput.value = userData.userDescription;
});

const popupCardWithImage = new PopupWithImage(".popup_type_image");
popupCardWithImage.setEventListeners();
