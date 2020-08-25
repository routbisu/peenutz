export const getExchangeRates = async (base = 'SGD') => {
  const result = await fetch(
    `https://api.exchangeratesapi.io/latest?base=${base}`
  );
  return await result.json();
};
