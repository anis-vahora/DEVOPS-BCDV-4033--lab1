const { add, subtract, multiply, divide } = require("./simpleCalculator");

test("adds 1 + 4 to equal 5", () => {
  expect(add(1, 4)).toBe(5);
});

test("subtracts 10 - 5 to equal 5", () => {
  expect(subtract(10, 5)).toBe(5);
});

test("multiplies 3 * 2 to equal 6", () => {
  expect(multiply(3, 2)).toBe(6);
});




test("divides 10 / 2 to equal 5", () => {
  expect(divide(10, 2)).toBe(5);
});

test("throws error when dividing by zero", () => {
  expect(() => {
    divide(6, 0);
  }).toThrow("Invalid Input! Cannot divide by zero");
});
