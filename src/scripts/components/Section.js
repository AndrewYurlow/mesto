export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._selector = selector;
    this._container = document.querySelector(this._selector);
  }
  addItem(element) {
    this._container.append(element);
  }
  renderItems() {
    this._items.forEach(item => {
      this._element = this._renderer(item);
      this.addItem(this._element);
    });
  }
  renderNewItem() {
    this._element = this._renderer(this._items);
    this._container.prepend(this._element);
  }
}