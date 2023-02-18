const popUpAccount = document.querySelector(".popup_type_account");
const popUpCard = document.querySelector(".popup_type_card");
const popUpImage = document.querySelector(".popup_type_image");

const closeButtons = document.querySelectorAll(".popup__button-close");
const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popName = document.querySelector(".profile__title");
const popUpdescription = document.querySelector(".profile__description");

const elementsContainer = document.querySelector(".elements__section-elements");

const formElementAccount = document.forms["popup-form-account"];
const nameInput = document.forms["popup-form-account"].elements["input-name"];
const jobInput = document.forms["popup-form-account"].elements["input-description"];

const formElementCard = document.forms["popup-form-card"];
const placeInput = document.forms["popup-form-card"].elements["input-name"];
const linkInput = document.forms["popup-form-card"].elements["input-description"];

const initialCards = [
  {
    name: "Териберка.",
    link: "./images/places/teriberka.jpg",
  },
  {
    name: "Москва.",
    link: "./images/places/moscow.jpg",
  },
  {
    name: "Кинерма.",
    link: "./images/places/kinerma.jpg",
  },
  {
    name: "Кировск.",
    link: "./images/places/kirkovsk.jpg",
  },
  {
    name: "Самара.",
    link: "./images/places/samara.jpg",
  },
  {
    name: "Иваново.",
    link: "./images/places/ivanovo.jpg",
  },
];

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
}

function openPopUpAccount() {
  openPopup(popUpAccount);
  nameInput.value = popName.textContent;
  jobInput.value = popUpdescription.textContent;
}

function handleFormSubmitAccount(evt) {
  evt.preventDefault();
  popName.textContent = nameInput.value;
  popUpdescription.textContent = jobInput.value;
  closePopup(popUpAccount);
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();
  eddCard(placeInput.value, linkInput.value);
  closePopup(popUpCard);
  evt.target.reset();
}

function eddCard(textDescription, link) {
  const cardTemplate = document.querySelector("#card-template").content; // let- const
  const elementContainer = cardTemplate.querySelector(".element").cloneNode(true); // let- const

  const imageElement = elementContainer.querySelector(".element__image");
  imageElement.alt = textDescription;
  imageElement.src = link || "./images/places/yacubovich.jpg";
  imageElement.addEventListener("click", function (evt) {
    popUpImage.classList.add("popup_opened");
    let bigImage = popUpImage.querySelector(".popup__image");
    let bigImageDescription = popUpImage.querySelector(".popup__description");
    bigImage.src = link || imageElement.src;
    bigImageDescription.textContent = textDescription || descriptionElement.textContent;
  });
  const descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("element__description-block");

  const descriptionElement = elementContainer.querySelector(".element__description");
  descriptionElement.textContent = textDescription || "Не надо так!";

  const buttonLike = elementContainer.querySelector(".element__like");
  buttonLike.setAttribute("aria-label", "Нравится.");
  buttonLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_liked");
  });

  const buttonDelete = elementContainer.querySelector(".element__delete-button");
  buttonDelete.setAttribute("aria-label", "Удалить.");
  buttonDelete.addEventListener("click", function () {
    elementContainer.remove(buttonDelete.parentElement);
  });

  elementsContainer.prepend(elementContainer);
  elementContainer.prepend(imageElement, descriptionContainer, buttonDelete);
  descriptionContainer.prepend(descriptionElement, buttonLike);
}

for (let i = 0; i < initialCards.length; i++) {
  eddCard(initialCards[i].name, initialCards[i].link);
}

editButton.addEventListener("click", openPopUpAccount);
addButton.addEventListener("click", () => openPopup(popUpCard));
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formElementAccount.addEventListener("submit", handleFormSubmitAccount);
formElementCard.addEventListener("submit", handleFormSubmitCard);
