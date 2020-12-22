export const addToCart = (data) => {
  console.log(data, "data in action cart");
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};

export const removeToCart = (id, index) => {
  return {
    type: "REMOVE_TO_CART",
    payload: { id, index },
  };
};

export const removeAll = () => {
  return {
    type: "REMOVE_ALL",
  };
};
