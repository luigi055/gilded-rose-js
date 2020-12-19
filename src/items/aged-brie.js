import { Item } from "./item";

export const AGED_BRIED = "Aged Brie";
export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super(AGED_BRIED, sellIn, quality);
  }

  updateQuality() {
    if (this.hasPassedSellInDay) {
      this.addQuality(2)
    } else {
      this.addQuality(1)
    }

    this.subtractOneDay()
  }
}