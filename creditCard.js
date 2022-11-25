const creditCard = (number) => {
  const cardNumbers = number.split("");
  if (cardNumbers.length < 12 || cardNumbers.length > 16) {
    return "Invalid Credit Card";
  }

  cardNumbers.forEach((element) => {
    if (/[a-zA-Z]/.test(element) === true) {
      console.log("Invalid Credit Card");
      return "Invalid Credit Card";
    }
  });

  for (let i = 0; i < cardNumbers.length - 4; i++) {
    cardNumbers[i] = "*";
  }

  const obscured = cardNumbers.join("");
  return obscured;
};
creditCard("12345678901a");
module.exports = { creditCard };
