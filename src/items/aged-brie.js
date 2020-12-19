import { _AbstractItem } from "./abstract-item";

export const AGED_BRIED = "Aged Brie";
export class AgedBrie extends _AbstractItem {
  constructor(sellIn, quality) {
    super(AGED_BRIED, sellIn, quality);
  }

  updateQuality() {
    if (!this.isMaxQuality){
      this.addQuality(1)
    }
    if (this.hasPassedSellInDay && !this.isMaxQuality) {
      this.addQuality(1)
    }

    this.subtractOneDay()
  }
}