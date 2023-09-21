import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles.js';
import productData from '../../../globals/productsData.js';
import ProductCard from '../ProductCard/productCard.jsx';

const ProductList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={productData}
        renderItem={({ item }) => (
          <ProductCard
            nombre={item.product}
            imagenFuente={item.img}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default ProductList;