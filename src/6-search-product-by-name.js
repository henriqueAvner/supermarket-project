const stockProducts = require('./data.json');

const searchProductByName = (nameProduct) => {
  const infoProduct = {};
  let productExists = false;
  
  for(let index = 0; index < stockProducts.length; index += 1){
    if(stockProducts[index].productName === nameProduct){
      productExists = true;
      infoProduct.description = `${stockProducts[index].description}`;
      infoProduct.formattedPrice = `R$ ${stockProducts[index].price}`;
      return infoProduct;

    } 
  }
  return null;
}
module.exports = { searchProductByName };
