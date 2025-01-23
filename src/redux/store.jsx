import { createStore } from 'redux';

const initialState = {
  products: [],
  selectedProducts: [],  // Se agregó esta propiedad al estado inicial
  encryptedCardData: null,  // Se agregó esta propiedad al estado inicial
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, products: action.payload };
    case 'ADD_PRODUCT':
      return { ...state, selectedProducts: [...state.selectedProducts, action.payload] };
    case 'REMOVE_PRODUCT':
      return {
        ...state,
        selectedProducts: state.selectedProducts.filter(product => product.id !== action.payload),
      };
    case 'STORE_CREDIT_CARD':
      return { ...state, encryptedCardData: action.payload };
    case 'CLEAR_CREDIT_CARD_DATA':
      return { ...state, encryptedCardData: null };
    case 'REMOVE_PRODUCTALL':
      return { ...state, selectedProducts: [] };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
