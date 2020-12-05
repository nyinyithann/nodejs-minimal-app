import findDepth from "./learning_array";

test("non array", () => {
    expect(findDepth(1)).toBe(0);
});

test("array with 1 depth", () => {
   expect(findDepth([1,2,3])).toBe(1);
});

test("array with 2 depth", () => {
    expect(findDepth([1,2,[3]])).toBe(2);
});

test("array with 3 depth", () => {
    expect(findDepth([1,2,[3, [4]]])).toBe(3);
});