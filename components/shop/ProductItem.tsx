import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import { IProduct } from '../../types';
import { COLORS } from '../../constants';

type Props = {
  product: IProduct;
  onViewDetail: () => void;
  onAddToCart: () => void;
};

export const ProductItem = ({ product, onViewDetail, onAddToCart }: Props) => {
  return (
    <View style={styles.productContainer}>
      <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
      <Text style={styles.productTitle}>{product.title}</Text>
      <Text style={styles.productPrice}>{product.price.toFixed(2)}💲</Text>
      <View style={styles.productActions}>
        <Button title={'View Details'} onPress={onViewDetail} />
        <Button title={'Add to Cart'} onPress={onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productContainer: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: COLORS.primaryLight,
    height: 300,
    margin: 20,
  },
  productImage: {
    height: '60%',
  },
  productTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 4,
    paddingHorizontal: 8,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.accent,
    paddingHorizontal: 8,
  },
  productActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: 8,
  },
});

export default ProductItem;
