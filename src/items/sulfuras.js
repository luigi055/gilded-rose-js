import { Item } from "./item";

export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export class Sulfuras extends Item {
  constructor(sellIn) {
    super(SULFURAS, sellIn, 80);
  }

  updateQuality() {}
}