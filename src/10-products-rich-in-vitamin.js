const stockProducts = require('./data.json');

const getProductsRichInVitamin = () => {
  let vitaminList = [];
  for (let index = 0; index < stockProducts.length; index += 1) {
    if (stockProducts[index].nutritionalInfo.vitamins !== undefined) {
      let vitProducts = {
        description: stockProducts[index].description,
        formattedPrice: `R$ ${stockProducts[index].price}`,
        vitaminsInformation: [`${stockProducts[index].nutritionalInfo}`] 
      }
      vitaminList.push(vitProducts);
    }
  }
  return vitaminList;
};

module.exports = { getProductsRichInVitamin };
