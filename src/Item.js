export default class Item {
  /**
   * 
   * @param {string} name 
   * @param {number} sellIn 
   * @param {number} quality 
   */
  constructor (name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}
