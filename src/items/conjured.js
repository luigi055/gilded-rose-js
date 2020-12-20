import { Item } from "./item";

export class Conjured extends Item {
  constructor(sellIn, quality) {
    super(sellIn, quality);
  }

  updateQuality() {
    if (this.hasPassedSellInDay) {
      this.addQuality(-4);
    } else {
      this.addQuality(-2);
    }
    this.subtractOneDay();
  }
}