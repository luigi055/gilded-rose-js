import Shop from "./shop";
import { 
  Sulfuras,
  AgedBrie,
  BackstageConcert,
  RegularItem,
  Conjured } from "./items";

describe("Testing Shop class", () => {
  describe("Test cases for regular item", () => {
    it("should degrade the quality of the product by each day that it passes", () => {
      const item = new RegularItem(1, 3);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new RegularItem(0, 2));
    });

    it("should not degrade the quality below to 0 when the item already has quality 0", () => {
      const item = new RegularItem(1, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new RegularItem(0, 0));
    });

    it("should quality decrease twice as fast when the sellIn has passed", () => {
      const item = new RegularItem(0, 5);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new RegularItem(-1, 3));
    });

    it("should not degrade the quality below 0 once the sell by date has passed", () => {
      const item = new RegularItem(0, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new RegularItem(-1, 0));
    });
  });

  describe(`Test cases for AgedBrie item`, () => {
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

  describe(`Test cases for Sulfuras item`, () => {
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

  describe(`Test cases for BackstageConcert item`, () => {
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

  describe(`Test cases for Conjured item`, () => {
    it("should degrade the quality by 2 of the product by each day that it passes", () => {
      const item = new Conjured(5, 10);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Conjured(4, 8));
    });

    it("should not degrade the quality below to 0 when the item already has quality 0", () => {
      const item = new Conjured(1, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Conjured(0, 0));
    });

    it("should quality decrease by 4 when the sellIn has passed", () => {
      const item = new Conjured(0, 5);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Conjured(-1, 1));
    });

    it("should not degrade the quality below 0 once the sell by date has passed", () => {
      const item = new Conjured(0, 0);

      new Shop([item]).updateQuality();

      expect(item).toEqual(new Conjured(-1, 0));
    });
  });

  describe("Testing all items together", () => {
    it("update the quality of all items", () => {
      const agedBrie = new AgedBrie(-5,10);
      const regularItem = new RegularItem(5,10);
      const sulfuras = new Sulfuras(5);
      const backstageConcert = new BackstageConcert(-1,45);
      const conjuredItem = new Conjured(-1,20);
      const anotherRegularItem = new RegularItem(5,25);

      new Shop([
        agedBrie,
        regularItem,
        sulfuras,
        backstageConcert,
        conjuredItem,
        anotherRegularItem
      ]).updateQuality();

      expect(agedBrie.quality).toEqual(12);
      expect(regularItem.quality).toEqual(9);
      expect(sulfuras.quality).toEqual(80);
      expect(backstageConcert.quality).toEqual(0);
      expect(conjuredItem.quality).toEqual(16);
      expect(anotherRegularItem.quality).toEqual(24);
    });
  });
});