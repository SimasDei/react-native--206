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
      <Text style={styles.productTitle}>{selectedProduct.title}</Text>
      <Button title={'Add to Cart'} onPress={() => {}} />
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
  productImageContainer: {},
  productImage: {},
  productTitle: {
    color: COLORS.accent,
  },
});

export default ProductDetailScreen;
