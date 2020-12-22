import products from "../data/products";

export const product = () => {
  const data = products;
  return {
    type: "PRODUCT",
    payload: data,
  };
};

export const productDetail = (data) => {
  return {
    type: "PRODUCT_DETAIL",
    payload: data,
  };
};

export const productLoToHigh = (data) => {
  return {
    type: "PRODUCT_LOW_TO_HIGH",
    payload: data,
  };
};

export const highToLowProduct = (data) => {
  return {
    type: "HIGH_TO_LOW_PRODUCT",
    payload: data,
  };
};

export const paginationOnProduct = (start, end) => {
  console.log(start + 3, end + 3, "data in pagination action");
  return {
    type: "PAGINATION_ON_PRODUCT",
  };
};
