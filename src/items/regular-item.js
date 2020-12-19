import { Item } from "./item";

export class RegularItem extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
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