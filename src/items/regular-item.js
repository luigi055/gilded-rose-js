import { _AbstractItem } from "./abstract-item";

export class RegularItem extends _AbstractItem {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }

  updateQuality() {
    if (this.quality > 0 && !this.hasPassedSellInDay) {
      this.addQuality(-1);
    } else if (this.quality > 0 && this.hasPassedSellInDay) {
      this.addQuality(-2);
    }
    this.subtractOneDay();
  }
}