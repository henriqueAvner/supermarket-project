const stockProducts = require('./data.json');

const getOutOfStockProducts = () => {
  let indispProducts = [];
  for (index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].quantityInStock == 0){
      indispProducts.push(stockProducts[index].productName)
    }
  }
  return indispProducts;
};
module.exports = { getOutOfStockProducts };
