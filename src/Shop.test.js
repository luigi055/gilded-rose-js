import Shop from "./Shop";
import Item from "./Item";

describe("Testing Shop class", () => {
  describe("Testing a regular item", () => {
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
})