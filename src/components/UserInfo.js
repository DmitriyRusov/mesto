class UserInfo {
  constructor({ selectorUserName, selectorUserAbout, selectorAvatar }) {
    this._userName = document.querySelector(selectorUserName);
    this._userDescription = document.querySelector(selectorUserAbout);
    this._selectorAvatar = document.querySelector(selectorAvatar)
   // console.log(this._selectorAvatar)
  }

  getUserInfo() {
    return {
      userName: this._userName.textContent,
      userDescription: this._userDescription.textContent,
    };
  }

  setUserInfo(userData) {
    this._userName.textContent = userData.name;
   this._userDescription.textContent = userData.about;
    }

    setAvatar (userAvatar) {
      this._selectorAvatar.style.backgroundImage = `url(${userAvatar})`;
    }
    
}

export { UserInfo };