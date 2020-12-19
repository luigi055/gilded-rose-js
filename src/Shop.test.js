import Shop from "./Shop";
import Item from "./Item";

const agedBrieName = "Aged Brie";
const sulfurasName = "Sulfuras, Hand of Ragnaros";

describe("Testing Shop class", () => {
  describe("Test cases for regular item", () => {
    const regularItemName = "regular item";
    it("should degrade the quality of the product by each day that it passes", () => {
      const item = new Item(regularItemName, 1, 3);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(regularItemName, 0, 2));
    });

    it("should not degrade the quality below to 0 when the item already has quality 0", () => {
      const item = new Item(regularItemName, 1, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(regularItemName, 0, 0));
    });

    it("should quality decrease twice as fast when the sellIn has passed", () => {
      const item = new Item(regularItemName, 0, 5);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(regularItemName, -1, 3));
    });

    it("should not degrade the quality below 0 once the sell by date has passed", () => {
      const item = new Item(regularItemName, 0, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(regularItemName, -1, 0));
    });
  });

  describe(`Test cases for${agedBrieName} item`, () => {
    it("should increase the quality by one every day", () => {
      const item = new Item(agedBrieName, 10, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(agedBrieName, 9, 11));
    })

    it("should quality increase twice as fast when the sellIn has passed", () => {
      const item = new Item(agedBrieName, -5, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(agedBrieName, -6, 12));
    })

    it("should not increase the quality of the item more than 50", () => {
      const item = new Item(agedBrieName, -5, 50);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(agedBrieName, -7, 50));
    })
  })

  describe(`Test cases for ${sulfurasName} item`, () => {
    it("should never decrease neither the sellIn days nor the quality", () => {
      const item = new Item(sulfurasName, 0, 40);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(sulfurasName, 0, 40));
    })
  })
})