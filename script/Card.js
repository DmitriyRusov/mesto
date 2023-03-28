import { popUpImage, bigImage, bigImageDescription } from "./utils/constants.js";
import { openPopup } from "./utils/utils.js";

class Card {
  constructor(cardObj, templateSelector) {
    this._card = cardObj;
    this._cardName = this._card.name;
    this._cardImage = this._card.link;
    this._cardTemplate = templateSelector;
  }

  _createCard() {
    this._cardTemp = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._cardTemp.querySelector(".element").cloneNode(true);
    return this._cardElement;
  }

  _removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }

  randerCard() {
    this._cardElement = this._createCard();

    this._cardElementImage = this._cardElement.querySelector(".element__image");
    this._cardElementImage.src = this._cardImage;
    this._cardElementImage.alt = this._cardName;

    this._descriptionElement = this._cardElement.querySelector(".element__description");
    this._descriptionElement.textContent = this._cardName;

    this._buttonLike = this._cardElement.querySelector(".element__like");
    this._buttonDelete = this._cardElement.querySelector(".element__delete-button");

    this._eventListeners();

    return this._cardElement;
  }

  _toogleLike() {
    this._buttonLike.classList.toggle("element__like_liked");
  }

  _openImage() {
    //this._popUpImage = document.querySelector(".popup_type_image");
    openPopup(popUpImage);
    bigImage.src = this._cardImage;
    bigImage.alt = this._cardName;
    bigImageDescription.textContent = this._cardName;
  }

  _eventListeners = () => {
    this._buttonLike.addEventListener("click", () => this._toogleLike());
    this._buttonDelete.addEventListener("click", () => this._removeCard());
    this._cardElementImage.addEventListener("click", () => this._openImage());
  };
}

export { Card };
