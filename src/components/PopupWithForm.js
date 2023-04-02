import { Popup } from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._formElement = this._selector.querySelector(".popup__form");
    this._inputList = Array.from(this._formElement.querySelectorAll(".popup__input"));
    this._buttonElement = this._formElement.querySelector(".popup__button-save");
  }

  _getInputValues() {
    const cardData = new Object();
    this._inputList.forEach((input) => {
      cardData[input.name] = input.value;
    });
    return cardData;
  }

  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._formElement.reset();
  }
}

export { PopupWithForm };