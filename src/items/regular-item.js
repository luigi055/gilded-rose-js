import { Item } from "./item";

export class RegularItem extends Item {
  constructor(sellIn, quality) {
    super(sellIn, quality);
  }

  updateQuality() {
    if (!this.hasPassedSellInDay) {
      this.addQuality(-1);
    } else {
      this.addQuality(-2);
    }
    this.subtractOneDay();
  }
}