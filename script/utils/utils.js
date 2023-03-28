function openPopup(popup) {
  popup.classList.add("popup_opened");
  if (popup.contains(popup.querySelector(".popup__form"))) {
    popup.querySelector(".popup__form").reset();
    const formSpans = Array.from(popup.querySelectorAll(".popup__span-error"));
    formSpans.forEach((element) => {
      element.classList.remove("popup__span-error_active");
    });
    const formImputs = Array.from(popup.querySelectorAll(".popup__input"));
    formImputs.forEach((element) => {
      element.classList.remove("popup__input-error");
    });
  }
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

export { openPopup, closePopup };