let popUpAccount = document.querySelector(".popup_type_account");
let popUpCard = document.querySelector(".popup_type_card");
let popUpImage = document.querySelector(".popup_type_image");

let editButton = document.querySelector(".profile__edit-button");
let addButton = document.querySelector(".profile__add-button");

let closeButtonAccount = popUpAccount.querySelector(".popup__button-close");
let closeButtonCard = popUpCard.querySelector(".popup__button-close");
let closeButtonImage = popUpImage.querySelector(".popup__button-close");

let popName = document.querySelector(".profile__title");
let popUpdescription = document.querySelector(".profile__description");

let formElementAccount = popUpAccount.querySelector(".popup__form");
let nameInput = formElementAccount.querySelector(".popup__input_value_name");
let jobInput = formElementAccount.querySelector(".popup__input_value_description");

let formElementCard = popUpCard.querySelector(".popup__form");
let placeInput = formElementCard.querySelector(".popup__input_value_place");
let linkInput = formElementCard.querySelector(".popup__input_value_link");

function closePopUpAccount() {
  popUpAccount.classList.remove("popup_opened");
}

function closePopUpCard() {
  popUpCard.classList.remove("popup_opened");
}

function closePopUpImage() {
  popUpImage.classList.remove("popup_opened");
}

let openPopUpAccount = function () {
  popUpAccount.classList.add("popup_opened");
  nameInput.value = popName.textContent;
  jobInput.value = popUpdescription.textContent;
};

let openPopUpCard = function () {
  popUpCard.classList.add("popup_opened");
};

function handleFormSubmitAccount(evt) {
  evt.preventDefault();
  popName.textContent = nameInput.value;
  popUpdescription.textContent = jobInput.value;
  closePopUpAccount();
}

function handleFormSubmitCard(evt) {
  evt.preventDefault();

  let newCard = {
    name: placeInput.value,
    link: linkInput.value,
  };

  initialCards.push(newCard);
  eddingCards(initialCards[initialCards.length - 1].name, initialCards[initialCards.length - 1].link);
  closePopUpCard();
  linkInput.value = null;
  placeInput.value = null;
}

closeButtonAccount.addEventListener("click", closePopUpAccount);
closeButtonCard.addEventListener("click", closePopUpCard);
closeButtonImage.addEventListener("click", closePopUpImage);

editButton.addEventListener("click", openPopUpAccount);
addButton.addEventListener("click", openPopUpCard);

formElementAccount.addEventListener("submit", handleFormSubmitAccount);
formElementCard.addEventListener("submit", handleFormSubmitCard);

// ------------- карточки --------------

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

let elementsContainer = document.querySelector(".elements__section-elements");

function eddingCards(textDescription, link) {
  let elementContainer = document.createElement("li");
  elementContainer.classList.add("element");

  let imageElement = document.createElement("img");
  imageElement.classList.add("element__image");
  imageElement.alt = textDescription;
  imageElement.src = link || "./images/places/yacubovich.jpg";
  imageElement.addEventListener("click", function (evt) {
    popUpImage.classList.add("popup_opened");
    let bigImage = popUpImage.querySelector(".popup__image");
    let bigImageDescription = popUpImage.querySelector(".popup__description");
    bigImage.src = link;
    bigImageDescription.textContent = textDescription;
  });

  let descriptionContainer = document.createElement("div");
  descriptionContainer.classList.add("element__description-block");

  let descriptionElement = document.createElement("h3");
  descriptionElement.classList.add("element__description");
  descriptionElement.textContent = textDescription || 'Не надо так!';

  let buttonLike = document.createElement("button");
  buttonLike.classList.add("element__like");
  buttonLike.setAttribute("aria-label", "Нравится.");
  buttonLike.addEventListener("click", function (evt) {
    evt.target.classList.toggle("element__like_liked");
  });

  let buttonDelete = document.createElement("button");
  buttonDelete.classList.add("element__close-button");
  buttonDelete.setAttribute("aria-label", "Удалить.");
  buttonDelete.addEventListener("click", function () {
    elementContainer.remove(buttonDelete.parentElement);
  });

  elementsContainer.prepend(elementContainer);
  elementContainer.prepend(imageElement, descriptionContainer, buttonDelete);
  descriptionContainer.prepend(descriptionElement, buttonLike);
}

for (let i = 0; i < initialCards.length; i++) {
  eddingCards(initialCards[i].name, initialCards[i].link);
}

// for (let i = initialCards.length; i > 0; i--) {
//     eddingCards(initialCards[i-1].name, initialCards[i-1].link)
// }
