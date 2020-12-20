import { Item } from "./item";
export class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super(sellIn, quality);
  }

  updateQuality() {
    if (this.hasPassedSellInDay) {
      this.addQuality(2);
    } else {
      this.addQuality(1);
    }

    this.subtractOneDay();
  }
}