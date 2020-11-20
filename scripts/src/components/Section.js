export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
  }
  addItem(element) {
    this._container = document.querySelector(this._selector);
    this._container.append(element);
  }
  renderItems() {
    this._items.forEach(item => {
      this._element = this._renderer(item);
      this.addItem(this._element);
    });
  }
}