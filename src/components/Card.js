class Card {
  constructor({ data, userId, handleCardClick, handleCardDelete, handleCardLike }, templateSelector) {
    this._card = data;
    this._cardName = this._card.name;
    this._cardImage = this._card.link;
    this._cardLikes = this._card.likes;
    this._cardId = this._card._id;
    this._userId = userId;
    this._cardTemplate = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleCardLike = handleCardLike;
  }

  _createCard() {
    this._cardTemp = document.querySelector(this._cardTemplate).content;
    this._cardElement = this._cardTemp.querySelector(".element").cloneNode(true);
    return this._cardElement;
  }

  removeCard() {
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
    if (this._userId !== this._card.owner._id) {
      this._buttonDelete.style.display = "none";
    }

    this._numberLikes = this._cardElement.querySelector(".element__number-likes");
    this._numberLikes.textContent = this._cardLikes.length;
    this.showLike();
    this._eventListeners();

    return this._cardElement;
  }

  showLike() {
    this._cardLikes.forEach((element) => {
      if (element._id === this._userId) {
        this._buttonLike.classList.add("element__like_liked");
      }
    });
  }

  isLiked() {
    return this._buttonLike.classList.contains("element__like_liked");
  }

  likeCard(count) {
    this._likes = this._card.likes;
    this._numberLikes.textContent = count;
    this._buttonLike.classList.toggle("element__like_liked");
  }

  _eventListeners = () => {
    this._buttonLike.addEventListener("click", () => this._handleCardLike(this._cardId));
    this._buttonDelete.addEventListener("click", () => {
      this._handleCardDelete({ cardObj: this._card, cardDom: this._cardElement });
    });
    this._cardElementImage.addEventListener("click", () => this._handleCardClick(this._cardName, this._cardImage));
  };
}

export { Card };
