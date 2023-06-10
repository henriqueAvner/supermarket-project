const stockProducts = require('./data.json');

const getProductsAmount = () => {
  let sumProducts = 0;
  for ( let index = 0; index <stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock > 0) {
      sumProducts += stockProducts[index].quantityInStock;
    }
  }
  return sumProducts;
};
module.exports = { getProductsAmount };
