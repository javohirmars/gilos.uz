const elProductTemplate = document.querySelector("#product-template");
const elProductsWrapper = document.querySelector("#products-wrapper")

const createProductRow = (product) => {
  const elProductRow = elProductTemplate.cloneNode(true).content;

  const elProductTitle = elProductRow.querySelector("#gadjet-title");
  elProductTitle.textContent = product.title;

  const elProductPrice = elProductRow.querySelector("#gadjet-price-actual");
  elProductPrice.textContent = product.price;

  const elProductPriceOld = elProductRow.querySelector("#gadjet-price-old");
  elProductPriceOld.textContent = product.price;

  const elProductManufacturer = elProductRow.querySelector("#gadjet-manufacturer");
  elProductManufacturer.textContent = product.model;

  const elProductAddedDate = elProductRow.querySelector("#announced-date");
  productAddedDate = new Date(product.addedDate);
  elProductAddedDate.textContent = `${productAddedDate.getDate()}.${productAddedDate.getMonth()  + 1}.${productAddedDate.getFullYear()}`;

  const elProductRAM = elProductRow.querySelector(".RAM");
  elProductRAM.textContent = product.benefits[0];

  const elProductMemory = elProductRow.querySelector(".MEMORY");
  elProductMemory.textContent = product.benefits[1];

  const elProductAdvantages = elProductRow.querySelector(".advantages");
  elProductAdvantages.textContent = product.benefits[2];

  return elProductRow;
}

products.forEach((product) => {
  const elProductRow = createProductRow(product);

  elProductsWrapper.append(elProductRow);
});
