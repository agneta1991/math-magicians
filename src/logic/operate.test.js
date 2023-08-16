import operate from "./operate";

describe("operate function", () => {
  it("should add two numbers", () => {
    const result = operate("2", "3", "+");
    expect(result).toBe("5");
  });
});
