const math = require('./math');

test("add 1 + 2 to be 3", () => {
  expect(math.sum(1,2)).toBe(3);
});

test("sub 2 - 1 to be 1", () => {
  expect(math.sub(2,1)).toBe(1);
});

test("div x by 0 to be 0", () => {
  expect(math.div(2,0)).toBe(0);
});
