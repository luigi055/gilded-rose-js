const MAX_QUALITY = 50;
const MIN_QUALITY = 0;

/**
 * this class is thought to be used as abstract class
 * use subclasses instead.
 */
export class Item {
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

  get sellIn() { return this._sellIn; }
  set sellIn(value) { this._sellIn = value; }

  get quality() { return this._quality; }
  set quality(value) { this._quality = value; }

  get hasPassedSellInDay() {
    return this.sellIn <= 0;
  }

  subtractOneDay() {
    this.sellIn--;
  }

  addQuality(numberToAdd) {
    this.quality = this.quality > MIN_QUALITY
      ? Math.min(this.quality + numberToAdd, MAX_QUALITY)
      : MIN_QUALITY;
  }

  // Abstract method updateQuality() {}
}