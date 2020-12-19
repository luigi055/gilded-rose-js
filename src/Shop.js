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

        if (!isAgedBried && !isConcertBackstage) {
          if (item.quality > 0) {
            if (!isSulfuras) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (isConcertBackstage) {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
            }
          }
        }
        if (!isSulfuras) {
          item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
          if (!isAgedBried) {
            if (!isConcertBackstage) {
              if (item.quality > 0) {
                if (!isSulfuras) {
                  item.quality = item.quality - 1;
                }
              }
            } else {
              item.quality = item.quality - item.quality;
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
        return item
      });

      return this.items;
  }

}

