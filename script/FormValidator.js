let classSelector = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_inactive",
  inputErrorClass: "popup__input-error",
  errorClass: "popup__input-error_active",
};

class FormValidator {
  constructor(classSelector, formElement) {
    this.classSelector = classSelector;
    this._formElement = formElement;
    this._inputList = Array.from(this._formElement.querySelectorAll(this.classSelector.inputSelector));
    this._buttonElement = this._formElement.querySelector(this.classSelector.submitButtonSelector);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this.classSelector.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this.classSelector.errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this.classSelector.inputErrorClass);
    errorElement.classList.remove(this.classSelector.errorClass);
    errorElement.textContent = "";
  }

  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _setEventListeners() {
    this._toggleButtonStatus();

    this._formElement.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonStatus();
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonStatus();
      });
    });
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this.classSelector.formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
    });
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  _toggleButtonStatus() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this.classSelector.inactiveButtonClass);
      this._buttonElement.setAttribute("disabled", "true");
    } else {
      this._buttonElement.classList.remove(this.classSelector.inactiveButtonClass);
      this._buttonElement.removeAttribute("disabled");
    }
  }
}

export { FormValidator, classSelector };
