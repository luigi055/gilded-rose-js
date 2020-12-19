import { _AbstractItem } from "./abstract-item";

export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export class Sulfuras extends _AbstractItem {
  constructor(sellIn) {
    super(SULFURAS, sellIn, 80);
  }

  updateQuality() {}
}