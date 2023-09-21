import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductData from '../../../globals/productsData.js';
import styles from './styles';
import CategoriesDetailCard from '../categoriesDetailCard/categoriesDetailCard';

const CategoriesDetail = ({ navigation, route }) => {
  const { nombre } = route.params;
  const [filteredProducts, setFilteredProducts] = useState([]); 

  useEffect(() => {
    const filtered = ProductData.filter(product => product.categoria === nombre);
    setFilteredProducts(filtered);
  }, [nombre]);

  return (
    <View>
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <CategoriesDetailCard
            product={item.product}
            img={item.img}
            precio={item.precio}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default CategoriesDetail;
