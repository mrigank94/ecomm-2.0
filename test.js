// jest

const { checkPalindrome } = require("./program");

let mockFn = jest.fn();
let mockCheckEven = jest.fn();

jest.mock("./program", () => ({
  checkPalindrome: (str) => mockFn(str),
  checkEven: (num) => mockCheckEven(num),
}));

test("checkPalindrome is called with correct parameters", () => {
  checkPalindrome("abc");

  expect(mockFn).toHaveBeenCalledWith("abc");
});

describe("sum", () => {
  test("sum is working correctly", () => {
    expect(2 + 3).toEqual(5);
  });

  test("sum is working correctly again", () => {
    expect(2 + 3).not.toEqual(6);
  });
});

// Objects

let obj = {
  a: 1,
  b: 2,
};

obj.c = 3;

describe("object", () => {
  test("object has correct keys", () => {
    expect(obj).toEqual({ b: 2, a: 1, c: 3 });
  });

  test("object has some of correct keys", () => {
    expect(obj).toMatchObject({ a: 1 });
  });
});

describe("truthy and falsy", () => {
  test("ghanshyam is not married", () => {
    let isMarried = false;
    expect(isMarried).not.toEqual(true);
  });

  test("undefined", () => {
    let a = undefined;

    expect(a).toBeUndefined();
    expect(a).not.toBeDefined();
  });

  test("null", () => {
    let a = null;

    expect(a).toBeNull();
  });

  test("truthy", () => {
    let a = 10;

    expect(a).toBeTruthy();
  });

  test("falsy", () => {
    // 0 "" null undefined false NaN
    let a = NaN;

    expect(a).toBeFalsy();
  });
});

// 1. Write a program to check if a number is prime or not and write test cases for it
// 2. Write a program to check if a string is palindrome or not and write test cases for it
