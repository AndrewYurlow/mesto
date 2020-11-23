export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._name = document.querySelector(nameSelector);
    this._description = document.querySelector(descriptionSelector);
  }
  getUserInfo() {
    const userInfo = {
      name: this._name.textContent,
      description: this._description.textContent
    }
    return userInfo;
  }
  setUserInfo(newUserName, newUserDescription) {
    this._name.textContent = newUserName;
    this._description.textContent = newUserDescription;
  }
}