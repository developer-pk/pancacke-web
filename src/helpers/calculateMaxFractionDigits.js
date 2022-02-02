export const calculateMaxFractionDigits = (number, minDigits = 8) => {
  let finalPrice = Number(number).toLocaleString('en', {
    maximumFractionDigits: minDigits,
    minimumFractionDigits: 2,
  });

  let finalDigits = minDigits;

  if (Number(finalPrice) === 0) {
    const maxDecimalPrice = Number(number).toFixed(18);
    const numberPlaces = new RegExp(/[1-9]/);
    const matchedNumbers = maxDecimalPrice.match(numberPlaces);
    if (matchedNumbers && matchedNumbers.length > 0) {
      finalDigits = maxDecimalPrice.search(maxDecimalPrice.match(numberPlaces));
    }
  }

  return finalDigits;
};
