class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._card = data;
    this._cardName = this._card.name;
    this._cardImage = this._card.link;
    this._cardTemplate = templateSelector;
    this._handleCardClick = handleCardClick;
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

  _eventListeners = () => {
    this._buttonLike.addEventListener("click", () => this._toogleLike());
    this._buttonDelete.addEventListener("click", () => this._removeCard());
    this._cardElementImage.addEventListener("click", () => this._handleCardClick(this._cardName, this._cardImage));
  };
}

export { Card };