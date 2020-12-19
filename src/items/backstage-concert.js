import { Item } from "./item";

export const CONCERT_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
export class BackstageConcert extends Item {
  constructor(sellIn, quality) {
    super(CONCERT_BACKSTAGE, sellIn, quality);
  }

  updateQuality() {
    const isHighDemand = this.sellIn > 5 && this.sellIn <= 10
    const isTheHighestDemand = this.sellIn >= 0 && this.sellIn <= 5

    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (isHighDemand) {
      this.addQuality(2);
    } else if (isTheHighestDemand) {
      this.addQuality(3);
    } else {
      this.addQuality(1);
    }

    this.subtractOneDay();
  }
}