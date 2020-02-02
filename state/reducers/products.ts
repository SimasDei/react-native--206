import { IProductsState } from '../../types';

const initialState: IProductsState = {
  availableProducts: [],
  userProducts: [],
};

export const productsReducer = (state = initialState, action) => {
  return state;
};
