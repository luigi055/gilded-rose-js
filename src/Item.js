export const AGED_BRIED = "Aged Brie";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export const CONCERT_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";

class _AbstractItem {
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

  updateQuality() {}
}

export class Sulfuras extends _AbstractItem {
  constructor(sellIn) {
    super(SULFURAS, sellIn, 80);
  }

  updateQuality() {}
}

export class AgedBrie extends _AbstractItem {
  constructor(sellIn, quality) {
    super(AGED_BRIED, sellIn, quality);
  }

  updateQuality() {
    if (!this.isMaxQuality){
      this.quality = this.quality + 1;
    }
    if (this.hasPassedSellInDay && !this.isMaxQuality) {
      this.quality = this.quality + 1;
    }

    this.subtractOneDay()
  }
}


export class BackstageConcert extends _AbstractItem {
  constructor(sellIn, quality) {
    super(CONCERT_BACKSTAGE, sellIn, quality);
  }

  updateQuality() {
    if (this.sellIn > 10 && !this.isMaxQuality) {
      this.quality = this.quality +1
    }
    if (this.sellIn <= 10 && !this.isMaxQuality) {
        this.quality = this.quality + 2;
    }
    if (this.sellIn <= 5 && !this.isMaxQuality) {
        this.quality = this.quality + 1;
    }
    if (this.sellIn < 0) {
      this.quality = 0;
    }

    this.subtractOneDay();
  }
}

export class RegularItem extends _AbstractItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality > 0 && !this.hasPassedSellInDay) {
      this.quality = this.quality - 1;
    } else if (this.quality > 0 && this.hasPassedSellInDay) {
      this.quality = this.quality - 2;
    }
    this.subtractOneDay()
  }
}