import { omit } from "lodash";
import { Category } from "./category";

describe("Category Unit Tests", () => {
  test("Constructor of category", () => {
    let category = new Category({ name: "Movie" });

    let props = omit(category.props, "createdAt");

    expect(props).toStrictEqual({
      name: "Movie",
      description: null,
      isActive: true,
    });

    expect(category.props.createdAt).toBeInstanceOf(Date);

    let createdAt = new Date();
    category = new Category({
      name: "Movie",
      description: "Some description",
      createdAt,
    });
    expect(category.props).toStrictEqual({
      name: "Movie",
      description: "Some description",
      isActive: true,
      createdAt,
    });

    category = new Category({
      name: "Movie",
      description: "Other description",
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      description: "Other description",
    });

    category = new Category({
      name: "Movie",
      isActive: false,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      isActive: false,
    });

    createdAt = new Date();
    category = new Category({
      name: "Movie",
      createdAt,
    });
    expect(category.props).toMatchObject({
      name: "Movie",
      createdAt,
    });
  });
});
