import Shop from "./Shop";
import Item, { AGED_BRIED, SULFURAS, CONCERT_BACKSTAGE, Sulfuras, AgedBrie, BackstageConcert } from "./Item";

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

  describe(`Test cases for${AGED_BRIED} item`, () => {
    it("should increase the quality by one every day", () => {
      const item = new AgedBrie(10, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new AgedBrie(9, 11));
    });

    it("should quality increase twice as fast when the sellIn has passed", () => {
      const item = new AgedBrie(-5, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new AgedBrie(-6, 12));
    });

    it("should not increase the quality of the item more than 50", () => {
      const item = new AgedBrie(-5, 50);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new AgedBrie(-7, 50));
    })
  });

  describe(`Test cases for ${SULFURAS} item`, () => {
    it("should never decrease neither the sellIn days nor the quality", () => {
      const item = new Sulfuras(0);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Sulfuras(0));
    });

    it("should always have quantity of 80", () => {
      const item = new Sulfuras(0);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item.quality).toBe(80);
    })
  });

  describe(`Test cases for ${CONCERT_BACKSTAGE} item`, () => {
    it("should increase the quality by three when sellIn field is less or equal than 5", () => {
      const item = new BackstageConcert(5, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new BackstageConcert(3, 16));
    });

    it("should increase the quality by two when sellIn field is less or equal than 10", () => {
      const item = new BackstageConcert(10, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new BackstageConcert(8, 14));
    });

    it("should increase the quality by 1 when sellIn field larger than 10", () => {
      const item = new BackstageConcert(12, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new BackstageConcert(10, 12));
    });

    it("should not increase the quality more than 50", () => {
      const item = new BackstageConcert(3, 48);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new BackstageConcert(1, 50));
    });

    it("should quality go to 0 when the sellIn day has passed", () => {
      const item = new BackstageConcert(-1, 48);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new BackstageConcert(-2, 0));
    });
  });
});