import { createStore, combineReducers } from 'redux';

import { productsReducer } from './reducers';

const rootReducer = combineReducers({
  products: productsReducer,
});

export const store = createStore(rootReducer);
