const stockProducts = require('./data.json');

const getUniqueProductsAmount = () => {
  let uniqueProducts = stockProducts.length;
  return uniqueProducts;
};
module.exports = { getUniqueProductsAmount };
