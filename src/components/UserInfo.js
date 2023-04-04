class UserInfo {
  constructor({ selectorUserName, selectorUserAbout }) {
    this._userName = document.querySelector(selectorUserName);
    this._userDescription = document.querySelector(selectorUserAbout);
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userDescription: this._userDescription.textContent,
    };
  }

  setUserInfo({ userName, userDescription }) {
    this._userName.textContent = userName;
    this._userDescription.textContent = userDescription;
    }
    
}

export { UserInfo };