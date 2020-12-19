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
    this.items.forEach(item => {
        if (item.name != AGED_BRIED && item.name != CONCERT_BACKSTAGE) {
          if (item.quality > 0) {
            if (item.name != SULFURAS) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == CONCERT_BACKSTAGE) {
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
        if (item.name != SULFURAS) {
          item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
          if (item.name != AGED_BRIED) {
            if (item.name != CONCERT_BACKSTAGE) {
              if (item.quality > 0) {
                if (item.name != SULFURAS) {
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
      });

      return this.items;
  }

}

