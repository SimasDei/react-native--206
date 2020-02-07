import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { IRootState } from '../../types';
import { COLORS } from '../../constants';

export const ProductDetailScreen = props => {
  const {
    navigation: { getParam },
  } = props;
  const productId = getParam('productId');
  const selectedProduct = useSelector((state: IRootState) =>
    state.products.availableProducts.find(product => product.id === productId),
  );

  return (
    <ScrollView style={styles.productContainer}>
      <View style={styles.productImageContainer}>
        <Image style={styles.productImage} source={{ uri: selectedProduct.imageUrl }} />
      </View>
      <View style={styles.productButton}>
        <Button color={COLORS.primary} title={'Add to Cart'} onPress={() => {}} />
      </View>
      <Text style={styles.productPrice}>{selectedProduct.price.toFixed(2)} 💲</Text>
      <Text style={styles.productDescription}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

ProductDetailScreen.navigationOptions = ({ navigation: { getParam } }) => ({
  headerTitle: getParam('productTitle'),
});

const styles = StyleSheet.create({
  productContainer: {
    flex: 1,
    backgroundColor: COLORS.primaryDark,
  },
  productImageContainer: {
    height: 300,
    width: '100%',
  },
  productImage: {
    flex: 1,
  },
  productDescription: {
    color: COLORS.accent,
    fontSize: 14,
    textAlign: 'center',
    marginTop: 12,
  },
  productPrice: {
    color: COLORS.accent,
    fontSize: 20,
    textAlign: 'center',
  },
  productButton: {
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
});

export default ProductDetailScreen;
