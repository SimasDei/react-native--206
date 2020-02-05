import React from 'react';
import { ScrollView, View, Text, Image, Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { IRootState } from '../../types';

export const ProductDetailScreen = props => {
  const {
    navigation: { getParam },
  } = props;
  const productId = getParam('productId');
  const selectedProduct = useSelector((state: IRootState) =>
    state.products.availableProducts.find(product => product.id === productId),
  );

  return (
    <ScrollView>
      <View>
        <Image source={{ uri: selectedProduct.imageUrl }} />
      </View>
      <Text>{selectedProduct.title}</Text>
      <Button title={'Add to Cart'} onPress={() => {}} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default ProductDetailScreen;
