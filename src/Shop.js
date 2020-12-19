import Item from './Item';

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
        if (item.name != 'Aged Brie' && item.name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (item.quality > 0) {
            if (item.name != 'Sulfuras, Hand of Ragnaros') {
              item.quality = item.quality - 1;
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
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
        if (item.name != 'Sulfuras, Hand of Ragnaros') {
          item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
          if (item.name != 'Aged Brie') {
            if (item.name != 'Backstage passes to a TAFKAL80ETC concert') {
              if (item.quality > 0) {
                if (item.name != 'Sulfuras, Hand of Ragnaros') {
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

