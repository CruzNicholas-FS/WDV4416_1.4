//Requirements
//TDD - create tests for a module that will:
//obscure credit card number except last 4 digits
//Make sure function obscures credit card numbers that are between the length of 12 & 16

const { creditCard } = require("./creditCard");

describe("Credit Card Module Tests", () => {
  test("Input valid credit card number length and return obscured number besides last 4 digits", () => {
    expect(creditCard("123456780912")).toBe("********0912");
  });

  test("Input invalid credit card number length and return invalid message", () => {
    expect(creditCard("123456")).toBe("Invalid Credit Card");
    expect(creditCard("1234567890123456789")).toBe("Invalid Credit Card");
  });

  test("Input credit card number with a letter and return invalid message", () => {
    expect(creditCard("12345678901a")).toBe("Invalid Credit Card");
  });
});
