const { chop } = require("../src/chop");

describe("Binary Chop", () => {
  const emptyArray = [];
  const array1 = [1];
  const array3 = [1, 3, 5];
  const array4 = [1, 3, 5, 7];

  test("Search in empty array", () => {
    expect(chop(3, emptyArray)).toBe(-1);
  });

  test("Search in array of size 1 with target not present", () => {
    expect(chop(3, array1)).toBe(-1);
  });

  test("Search in array of size 1 with target present", () => {
    expect(chop(1, array1)).toBe(0);
  });

  test("Search in array of size 3 with target not present", () => {
    expect(chop(0, array3)).toBe(-1);
    expect(chop(2, array3)).toBe(-1);
    expect(chop(4, array3)).toBe(-1);
    expect(chop(6, array3)).toBe(-1);
  });

  test("Search in array of size 3 with target present", () => {
    expect(chop(1, array3)).toBe(0);
    expect(chop(3, array3)).toBe(1);
    expect(chop(5, array3)).toBe(2);
  });

  test("Search in array of size 4 with target not present", () => {
    expect(chop(0, array4)).toBe(-1);
    expect(chop(2, array4)).toBe(-1);
    expect(chop(4, array4)).toBe(-1);
    expect(chop(6, array4)).toBe(-1);
    expect(chop(8, array4)).toBe(-1);
  });

  test("Search in array of size 4 with target present", () => {
    expect(chop(1, array4)).toBe(0);
    expect(chop(3, array4)).toBe(1);
    expect(chop(5, array4)).toBe(2);
    expect(chop(7, array4)).toBe(3);
  });
});
