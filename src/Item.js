export default class Item {
  /**
   * 
   * @param {string} name 
   * @param {number} sellIn 
   * @param {number} quality 
   */
  constructor (name, sellIn, quality) {
    this._name = name;
    this._sellIn = sellIn;
    this._quality = quality;
  }

  get name() { return this._name; }
  set name(value) { this._name = value; }

  get sellIn() { return this._sellIn; }
  set sellIn(value) { this._sellIn = value; }

  get quality() { return this._quality; }
  set quality(value) { this._quality = value; }
}
