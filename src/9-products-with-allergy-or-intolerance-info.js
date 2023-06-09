const stockProducts = require('./data.json');

const getProductsWithAllergyOrIntoleranceInfo = () => {
 let alergicProducts = [];
  for(let index = 0; index < stockProducts.length; index += 1){
    let objProducts = {};
    if(stockProducts[index].allergyOrIntolerance !== undefined){
      objProducts.description = stockProducts[index].description;
      objProducts.formattedPrice = `R$ ${stockProducts[index].price}`;
      objProducts.allergyOrIntoleranceMessage = `Pode conter: ${stockProducts[index].allergyOrIntolerance.join(' ')}`;

      alergicProducts.push(objProducts);
    }

  }
  return alergicProducts;
};

module.exports = { getProductsWithAllergyOrIntoleranceInfo };
