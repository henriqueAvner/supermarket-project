const stockProducts = require('./data.json');

const getProductsOnSale = () => {
  let productsArray = [];
  
  for(let index = 0; index < stockProducts.length; index += 1){
    let prOnSale = {};
    if(stockProducts[index].onSale === true){
      prOnSale.description = stockProducts[index].description;
      prOnSale.formattedPrice = `R$ ${stockProducts[index].price.toFixed(2)}`;
      prOnSale.onSale = stockProducts[index].onSale;
      
      productsArray.push(prOnSale);
    }
  }
  return productsArray;
};

module.exports = { getProductsOnSale };
