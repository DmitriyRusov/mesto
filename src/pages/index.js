import { FormValidator, validatorConfig } from "../components/FormValidator.js";
import { editButton, addButton, popName, popUpdescription, formElementAccount, nameInput, jobInput, formElementCard, formElementAvatar, avatarImage, authorizationToken } from "../components/utils/constants.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupConfirm } from "../components/PopupConfirm.js";
import { Api } from "../components/Api.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";
import { Popup } from "../components/Popup.js";

import './index.css';

const cardItemValidate = new FormValidator(validatorConfig, formElementCard);
cardItemValidate.enableValidation();
const profileEditeValidate = new FormValidator(validatorConfig, formElementAccount);
profileEditeValidate.enableValidation();
const avaatrPopupValidate = new FormValidator(validatorConfig, formElementAvatar);
avaatrPopupValidate.enableValidation();

const api = new Api(authorizationToken);

const editInfo = new UserInfo({ selectorUserName: ".profile__title", selectorUserAbout: ".profile__description", selectorAvatar: ".profile__logo" });

let userId;

Promise.all([api.getUserData(), api.getInitialCards()])
  .then(([userData, cardItems]) => {
    userId = userData._id;
    editInfo.setUserInfo(userData);
    editInfo.setAvatar(userData.avatar);
    standartCards.renderItems(cardItems);
  })
  .catch((err) => {
    console.log(err);
  });

editButton.addEventListener("click", () => {
  const userData = editInfo.getUserInfo();
  popupEditProfile.open();
  profileEditeValidate.resetValidation();
  nameInput.value = userData.userName;
  jobInput.value = userData.userDescription;
});

const standartCards = new Section(
  {
    renderer: (item) => {
      const cardElement = createCard(item);

      standartCards.addItem(cardElement);
    },
  },
  ".elements__section-elements"
);

const popupEditProfile = new PopupWithForm(".popup_type_account", (newUserInfo) => {
  popupEditProfile.loadingConfirm(true);
  api
    .editCustomProfile(newUserInfo)
    .then((res) => {
      editInfo.setUserInfo(res);
      popupEditProfile.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupEditProfile.loadingConfirm(false, "Сохранить");
    });
});

popupEditProfile.setEventListeners();

const popupCardWithForm = new PopupWithForm(".popup_type_card", (cardData) => {
  popupCardWithForm.loadingConfirm(true);
  api
    .addNewCard(cardData)
    .then((res) => {
      const cardElement = createCard(res);
      standartCards.addItem(cardElement);
      popupCardWithForm.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupCardWithForm.loadingConfirm(false, "Создать");
    });
});

popupCardWithForm.setEventListeners();

addButton.addEventListener("click", () => {
  popupCardWithForm.open();
  cardItemValidate.resetValidation();
});

const popupClose = new PopupConfirm(".popup_type_delete-card", (thisCard) => {
  popupClose.loadingConfirm(true);
  api
    .deleteCard(thisCard.cardObj._id)
    .then((res) => {
      thisCard.cardDom.remove();
      popupClose.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      popupClose.loadingConfirm(false, "Да");
    });
});
popupClose.setEventListeners();

function createCard(item) {
  const newCard = new Card(
    {
      data: item,
      userId: userId,
      handleCardClick: (name, link) => {
        popupCardWithImage.open(name, link);
      },
      handleCardDelete: (card) => {
        popupClose.open(card);
      },
      handleCardLike: (thisCardId) => {
        if (!newCard.isLiked()) {
          api
            .setCardLike(thisCardId)
            .then((res) => {
              newCard.likeCard(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {
          api
            .deleteCardLike(thisCardId)
            .then((res) => {
              newCard.likeCard(res.likes.length);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      },
    },
    "#card-template"
  );

  const cardElement = newCard.randerCard();
  return cardElement;
}

const popupCardWithImage = new PopupWithImage(".popup_type_image");
popupCardWithImage.setEventListeners();

const popupAvatar = new PopupWithForm(".popup_type_avatar", (data) => {
  popupAvatar.loadingConfirm(true);
  api
    .updateAvatar({ avatar: data["input-description"] })
    .then((res) => {
      //console.log(res);
      editInfo.setAvatar(data["input-description"]);
      popupAvatar.close();
    })
    .catch((err) => {
      console.log("qwe", err);
    })
    .finally(() => {
      popupAvatar.loadingConfirm(false, "Сохранить");
    });
});
popupAvatar.setEventListeners();

avatarImage.addEventListener("click", () => {
  popupAvatar.open();
});
