import { Item } from './items';

export default class Shop {
  /**
   *
   * @param {Item[]} someItems 
   */
  constructor(someItems) {
    this._items = someItems;
  }

  get items() { return this._items; }

  updateQuality() {
    this.items.forEach(item => {
      item.updateQuality();
    });

    return this.items;
  }
}

