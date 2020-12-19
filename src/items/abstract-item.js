export class _AbstractItem {
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

  get isMaxQuality() {
    return this.quality >= 50;
  }

  get hasPassedSellInDay() {
    return this.sellIn <= 0;
  }

  subtractOneDay() {
    this.sellIn--
  }

  addQuality(numberToAdd) {
    this.quality = this.quality > 0 
      ? Math.min(this.quality + numberToAdd, 50)
      : 0 ;
  }

  // Abstract method
  updateQuality() {}
}