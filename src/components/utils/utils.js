function resetValidation() {
  const popupWithForm = document.querySelector(".popup_opened");
  if (popupWithForm.contains(popupWithForm.querySelector(".popup__form"))) {
    popupWithForm.querySelector(".popup__form").reset();
    const formSpans = Array.from(popupWithForm.querySelectorAll(".popup__span-error"));
    formSpans.forEach((element) => {
      element.classList.remove("popup__span-error_active");
    });
    const formImputs = Array.from(popupWithForm.querySelectorAll(".popup__input"));
    formImputs.forEach((element) => {
      element.classList.remove("popup__input-error");
    });
  }
}

export { resetValidation };