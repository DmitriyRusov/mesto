const teriberka = new URL('../../images/places/teriberka.jpg', import.meta.url);
const moscow = new URL('../../images/places/moscow.jpg', import.meta.url);
const kinerma = new URL('../../images/places/kinerma.jpg', import.meta.url);
const kirkovsk = new URL('../../images/places/kirkovsk.jpg', import.meta.url);
const samara = new URL('../../images/places/samara.jpg', import.meta.url);
const ivanovo = new URL('../../ivanovo.jpg', import.meta.url);

const initialCards = [
  {
    name: "Териберка.",
    link: teriberka,
  },
  {
    name: "Москва.",
    link: moscow,
  },
  {
    name: "Кинерма.",
    link: kinerma,
  },
  {
    name: "Кировск.",
    link: kirkovsk,
  },
  {
    name: "Самара.",
    link: samara,
  },
  {
    name: "Иваново.",
    link: ivanovo,
  },
];

const editButton = document.querySelector(".profile__edit-button");
const addButton = document.querySelector(".profile__add-button");

const popName = document.querySelector(".profile__title");
const popUpdescription = document.querySelector(".profile__description");

const formElementAccount = document.forms["popup-form-account"];
const nameInput = formElementAccount.elements["input-name"];
const jobInput = formElementAccount.elements["input-description"];

const formElementCard = document.forms["popup-form-card"];

export { initialCards, editButton, addButton, popName, popUpdescription, formElementAccount, nameInput, jobInput, formElementCard };