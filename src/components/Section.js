export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(item) {
    this._container.prepend(item);
  }

  removeCard(item) {
    console.log("sectionRemoveElement", item);
    this._container.remove(item);
  }

  renderItems(items) {
    for (let i = items.length - 1; i > -1; i--) {
      this._renderer(items[i]);
    }
  }
}

export { Section };
