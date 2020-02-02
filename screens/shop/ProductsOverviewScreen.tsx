import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import { IRootState } from '../../types';

export const ProductsOverviewScreen = () => {
  const products = useSelector((state: IRootState) => state.products.availableProducts);

  return <FlatList data={products} renderItem={({ item }) => <Text>{item.title}</Text>} />;
};

export default ProductsOverviewScreen;
