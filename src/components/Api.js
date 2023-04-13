export default class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _serverResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`код ошибки: ${res.status}`);
    }
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  editCustomProfile(userInfo) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: userInfo["input-name"], about: userInfo["input-description"] }),
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  addNewCard(cardData) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name: cardData["input-name"], link: cardData["input-description"] }),
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  setCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  deleteCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then((res) => {
      return this._serverResponse(res);
    });
  }

  updateAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((res) => {
      return this._serverResponse(res);
    });
  }
}

export { Api };
