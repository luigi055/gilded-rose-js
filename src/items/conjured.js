import { Item } from "./item";

export const CONJURED = "Conjured" ;
export class Conjured extends Item {
  constructor(sellIn, quality) {
    super(CONJURED, sellIn, quality);
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