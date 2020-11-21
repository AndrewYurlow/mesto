export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._name = document.querySelector(this._nameSelector);
    this._description = document.querySelector(this._descriptionSelector);
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