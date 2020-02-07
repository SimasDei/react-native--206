import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, StyleSheet } from 'react-native';

import { IProduct } from '../../types';
import { COLORS } from '../../constants';

type Props = {
  product: IProduct;
  onViewDetail?: () => void;
  onAddToCart?: () => void;
};

export const ProductItem = ({ product, onViewDetail, onAddToCart }: Props) => {
  return (
    <TouchableOpacity onPress={onViewDetail}>
      <View style={styles.productContainer}>
        <Image style={styles.productImage} source={{ uri: product.imageUrl }} />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>{product.price.toFixed(2)}💲</Text>
        </View>
        <View style={styles.productActions}>
          <Button color={COLORS.primary} title={'View Details'} onPress={onViewDetail} />
          <Button color={COLORS.primary} title={'Add to Cart'} onPress={onAddToCart} />
        </View>
      </View>
    </TouchableOpacity>
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
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  productDetails: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  productTitle: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 4,
  },
  productPrice: {
    fontSize: 14,
    color: COLORS.accent,
  },
  productActions: {
    height: '25%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default ProductItem;
