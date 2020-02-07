import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { IRootState, IProduct } from '../../types';
import { COLORS } from '../../constants';

import { ProductItem } from '../../components/shop';

export const ProductsOverviewScreen = props => {
  const products = useSelector((state: IRootState) => state.products.availableProducts);
  const {
    navigation: { navigate },
  } = props;

  const onViewDetail = (product: IProduct) => {
    const params = {
      productId: product.id,
      productTitle: product.title,
    };
    navigate({ routeName: 'ProductDetail', params });
  };

  return (
    <FlatList
      style={styles.container}
      data={products}
      renderItem={({ item }) => (
        <ProductItem product={item} onViewDetail={() => onViewDetail(item)} />
      )}
    />
  );
};

ProductsOverviewScreen.navigationOptions = {
  headerTitle: 'All Products',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  productText: {
    color: '#fff',
  },
});

export default ProductsOverviewScreen;
