
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
export const REMOVE_PRODUCTALL = 'REMOVE_PRODUCTALL';
export const STORE_CREDIT_CARD = 'STORE_CREDIT_CARD';
export const CLEAR_CREDIT_CARD_DATA = 'CLEAR_CREDIT_CARD_DATA'

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});

export const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product,
});

export const removeProduct = (productId) => ({
  type: REMOVE_PRODUCT,
  payload: productId,
});
export const clearSelectedProducts = () => {
  return {
    type: REMOVE_PRODUCTALL
  };
};
export const storeCreditCardData = (data) => {
  return {
    type: STORE_CREDIT_CARD,
    payload: data,
  };
};
export const clearCreditCardData = () => {
  return {
    type: CLEAR_CREDIT_CARD_DATA,
  };
};
