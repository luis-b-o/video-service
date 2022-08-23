import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("Category constructor", () => {
    const category = new Category("movie");

    expect(category.name).toBe("movie");
  });
});
