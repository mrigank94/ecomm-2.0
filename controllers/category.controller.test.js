const { mockResponse, mockRequest } = require("../mock");
const { Category } = require("../models");
const { createCategory } = require("./category.controller");

let res, req;

beforeEach(() => {
  res = mockResponse();
  req = mockRequest();
});

const testPayload = {
  name: "Electronics",
  description: "Electronics Category",
};

describe("Category controller create method", () => {
  test("should return the created category with 201 status code", 
  async () => {
    const spy = jest.spyOn(Category, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          resolve(testPayload);
        })
    );

    req.body = testPayload;

    await createCategory(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.send).toHaveBeenCalledWith(testPayload);
  });

  test("should return 400 status code if DB call fails", async () => {
    const spy = jest.spyOn(Category, "create").mockImplementation(
      (testPayload) =>
        new Promise((resolve, reject) => {
          reject(testPayload);
        })
    );

    req.body = testPayload;

    await createCategory(req, res);

    expect(spy).toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith({
      message: "Bad request for creating category",
    });
  });
});
