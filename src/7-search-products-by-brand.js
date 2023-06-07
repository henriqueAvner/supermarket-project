const stockProducts = require('./data.json');

const searchProductsByBrand = (brand) => {
  const infoProduct = [];
  
  for(let index = 0; index < stockProducts.length; index += 1){
    if(stockProducts[index].brand === brand){
  
      infoProduct.push({
        description: `${stockProducts[index].description}`,
        formattedPrice: `R$ ${stockProducts[index].price}`
      })
    } 
    
    }
    return infoProduct;
    
  }

module.exports = { searchProductsByBrand };
