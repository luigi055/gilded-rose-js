export const AGED_BRIED = "Aged Brie";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export const CONCERT_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

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

  updateQuality() {
    const isAgedBried = this.name === AGED_BRIED;
    const isConcertBackstage = this.name === CONCERT_BACKSTAGE
    const isMaxQuality = quality => quality >= 50;
    const hasQuality = quality => quality > 0;
    const shouldDegradeQuality = hasQuality(this.quality) && !isAgedBried && !isConcertBackstage
    const hasPassedSellInDay = (sellIn) => sellIn <= 0;

        if (shouldDegradeQuality && !hasPassedSellInDay(this.sellIn)) {
          this.quality = this.quality - 1;
        } else if (shouldDegradeQuality && hasPassedSellInDay(this.sellIn)) {
          this.quality = this.quality - 2;
        } else if (isConcertBackstage) {
          if (this.sellIn > 10 && !isMaxQuality(this.quality)) {
            this.quality = this.quality +1
          }
          if (this.sellIn <= 10 && !isMaxQuality(this.quality)) {
              this.quality = this.quality + 2;
          }
          if (this.sellIn <= 5 && !isMaxQuality(this.quality)) {
              this.quality = this.quality + 1;
          }
          if (this.sellIn < 0) {
            this.quality = 0;
          }
        }

        this.sellIn = this.sellIn - 1;

  }
}

export class Sulfuras extends Item {
  constructor(sellIn) {
    super(SULFURAS, sellIn, 80);
  }

  updateQuality() {}
}

export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super(AGED_BRIED, sellIn, quality);
  }

  updateQuality() {
    const isMaxQuality = quality => quality >= 50;
    const hasQuality = quality => quality > 0;
    const hasPassedSellInDay = (sellIn) => sellIn <= 0;

    if (!isMaxQuality(this.quality)){
      this.quality = this.quality + 1;
    }
    if (hasPassedSellInDay(this.sellIn) && !isMaxQuality(this.quality)) {
      this.quality = this.quality + 1;
    }

    this.sellIn = this.sellIn - 1;
  }
}