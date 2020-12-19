import Item from './Item';

export const AGED_BRIED = "Aged Brie";
export const SULFURAS = "Sulfuras, Hand of Ragnaros";
export const CONCERT_BACKSTAGE = "Backstage passes to a TAFKAL80ETC concert";
export default class Shop {
  /**
   * 
   * @param {Item[]} someItems 
   */
  constructor(someItems) {
    this._items = someItems;
  }

  get items() { return this._items; }
  set items(items) { return this._items = items }

  updateQuality() {
    this.items = this.items.map(item => {
        const isSulfuras = item.name === SULFURAS;
        const isAgedBried = item.name === AGED_BRIED;
        const isConcertBackstage = item.name === CONCERT_BACKSTAGE
        const isMaxQuality = quality => quality >= 50;
        const hasQuality = quality => quality > 0;
        const shouldDegradeQuality = hasQuality(item.quality) && !isSulfuras && !isAgedBried && !isConcertBackstage
        const hasPassedSellInDay = (sellIn) => sellIn <= 0;

        if (shouldDegradeQuality) {
          item.quality = item.quality - 1;
          if (hasPassedSellInDay(item.sellIn)) {
            item.quality--;
          }
        }

        if (isConcertBackstage) {
          if (item.sellIn > 10 && !isMaxQuality(item.quality)) {
            item.quality = item.quality +1
          }
          if (item.sellIn <= 10 && !isMaxQuality(item.quality)) {
              item.quality = item.quality + 2;
          }
          if (item.sellIn <= 5 && !isMaxQuality(item.quality)) {
              item.quality = item.quality + 1;
          }
          if (item.sellIn < 0) {
            item.quality = 0;
          }
        }

        if (!isSulfuras) {
          item.sellIn = item.sellIn - 1;
        }

        if (isAgedBried && !isMaxQuality(item.quality)){
          item.quality = item.quality + 1;
          if (hasPassedSellInDay(item.sellIn)) {
            item.quality = item.quality + 1;

          }
        }

        return item
      });

      return this.items;
  }

}

