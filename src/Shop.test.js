import Shop, { AGED_BRIED, SULFURAS, CONCERT_BACKSTAGE } from "./Shop";
import Item from "./Item";

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
      const item = new Item(AGED_BRIED, 10, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(AGED_BRIED, 9, 11));
    });

    it("should quality increase twice as fast when the sellIn has passed", () => {
      const item = new Item(AGED_BRIED, -5, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(AGED_BRIED, -6, 12));
    });

    it("should not increase the quality of the item more than 50", () => {
      const item = new Item(AGED_BRIED, -5, 50);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(AGED_BRIED, -7, 50));
    })
  });

  describe(`Test cases for ${SULFURAS} item`, () => {
    it("should never decrease neither the sellIn days nor the quality", () => {
      const item = new Item(SULFURAS, 0, 40);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(SULFURAS, 0, 40));
    })
  });

  describe(`Test cases for ${CONCERT_BACKSTAGE} item`, () => {
    it("should increase the quality by three when sellIn field is less or equal than 5", () => {
      const item = new Item(CONCERT_BACKSTAGE, 5, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(CONCERT_BACKSTAGE, 3, 16));
    });

    it("should increase the quality by two when sellIn field is less or equal than 10", () => {
      const item = new Item(CONCERT_BACKSTAGE, 10, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(CONCERT_BACKSTAGE, 8, 14));
    });

    it("should increase the quality by 1 when sellIn field larger than 10", () => {
      const item = new Item(CONCERT_BACKSTAGE, 12, 10);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(CONCERT_BACKSTAGE, 10, 12));
    });

    it("should not increase the quality more than 50", () => {
      const item = new Item(CONCERT_BACKSTAGE, 3, 48);

      new Shop([item]).updateQuality();
      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(CONCERT_BACKSTAGE, 1, 50));
    });

    it("should quality go to 0 when the sellIn day has passed", () => {
      const item = new Item(CONCERT_BACKSTAGE, -1, 48);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Item(CONCERT_BACKSTAGE, -2, 0));
    });
  });
});