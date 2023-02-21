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
const nameInput = formElementAccount.elements["input-name"];
const jobInput = formElementAccount.elements["input-description"];

const formElementCard = document.forms["popup-form-card"];
const placeInput = formElementCard.elements["input-name"];
const linkInput = formElementCard.elements["input-description"];

const bigImage = popUpImage.querySelector(".popup__image");
const bigImageDescription = popUpImage.querySelector(".popup__description");

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
  addCard(placeInput.value, linkInput.value);
  closePopup(popUpCard);
  evt.target.reset();
}

function createCard(textDescription, link) {
  const cardTemplate = document.querySelector("#card-template").content;
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);

  const imageElement = cardElement.querySelector(".element__image");
  imageElement.alt = textDescription;
  imageElement.src = link || "./images/places/yacubovich.jpg";
  imageElement.addEventListener("click", function (evt) {
    openPopup(popUpImage);
    bigImage.src = imageElement.src;
    bigImageDescription.textContent = descriptionElement.textContent;
  });

  const descriptionElement = cardElement.querySelector(".element__description");
  descriptionElement.textContent = textDescription || "Не надо так!";

  const buttonLike = cardElement.querySelector(".element__like");
  buttonLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_liked");
  });

  const buttonDelete = cardElement.querySelector(".element__delete-button");
  buttonDelete.addEventListener("click", function () {
    cardElement.remove();
  });

  return cardElement;
}

function addCard(textDescription, link) {
  const cardElement = createCard(textDescription, link);
  elementsContainer.prepend(cardElement);
}

for (let i = 0; i < initialCards.length; i++) {
  addCard(initialCards[i].name, initialCards[i].link);
}

editButton.addEventListener("click", openPopUpAccount);
addButton.addEventListener("click", () => openPopup(popUpCard));
closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

formElementAccount.addEventListener("submit", handleFormSubmitAccount);
formElementCard.addEventListener("submit", handleFormSubmitCard);
