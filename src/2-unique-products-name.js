const stockProducts = require('./data.json');

const getUniqueProductsName = () => {
  let nameProducts = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
   nameProducts.push(stockProducts[index].productName);
  }
  return nameProducts;
};
module.exports = { getUniqueProductsName };
