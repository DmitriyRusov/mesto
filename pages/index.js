import { FormValidator, validatorConfig } from "../components/FormValidator.js";
import { initialCards, editButton, addButton, popName, popUpdescription, formElementAccount, nameInput, jobInput, formElementCard } from "../components/utils/constants.js";
import { resetValidation } from "../components/utils/utils.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const cardItemValidate = new FormValidator(validatorConfig, formElementCard);
cardItemValidate.enableValidation();
const profileEditeValidate = new FormValidator(validatorConfig, formElementAccount);
profileEditeValidate.enableValidation();

const popupCardWithForm = new PopupWithForm(".popup_type_card", {
  callbackSubmitForm: (cardData) => {
    const newCards = new Section(
      {
        items: [{ name: cardData["input-name"], link: cardData["input-description"] }],
        renderer: (item) => {
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
          newCards.addItem(cardElement);
        },
      },
      ".elements__section-elements"
    );

    newCards.renderItems();
    popupCardWithForm.close();
  },
});

addButton.addEventListener("click", () => {
  popupCardWithForm.open();
  resetValidation();
});

popupCardWithForm.setEventListeners();

const popupEditProfile = new PopupWithForm(".popup_type_account", {
  callbackSubmitForm: (userInfo) => {
    popName.textContent = userInfo["input-name"];
    popUpdescription.textContent = userInfo["input-description"];
    popupEditProfile.close();
  },
});

popupEditProfile.setEventListeners();

const editInfo = new UserInfo({ selectorUserName: ".profile__title", selectorUserAbout: ".profile__description" });

editButton.addEventListener("click", () => {
  const userData = editInfo.getUserInfo();
  popupEditProfile.open();
  resetValidation();
  nameInput.value = userData.userName;
  jobInput.value = userData.userDescription;
});

const popupCardWithImage = new PopupWithImage(".popup_type_image");
popupCardWithImage.setEventListeners();

const standartCards = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const standartCard = new Card(
        {
          data: item,
          handleCardClick: (name, link) => {
            popupCardWithImage.open(name, link);
          },
        },
        "#card-template"
      );

      const cardElement = standartCard.randerCard();
      standartCards.addItem(cardElement);
    },
  },
  ".elements__section-elements"
);

standartCards.renderItems();