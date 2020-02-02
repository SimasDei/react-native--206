import React from 'react';
import { Provider } from 'react-redux';

import { store } from './state';
import { AppContainer } from './navigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
}
