import React, { useEffect, useState } from 'react';
import { View, FlatList, Text } from 'react-native';
import ProductData from '../../../globals/productsData.js';
import styles from './styles';
import CategoriesDetailCard from '../categoriesDetailCard/categoriesDetailCard';

const CategoriesDetail = ({categoria}) => {

//  const [products, setProducts] = useState([]);
  
//  useEffect(() => {
//    const filteredProducts = productData.filter(product => product.categoria === categoria);
//    setProducts(filteredProducts);
//  }, [categoria]);

  return (
      <View>
        <FlatList
          data={ProductData}
          renderItem={({ item }) => (
            <CategoriesDetailCard
              product={item.product}
              img={item.img}
              precio={item.precio}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );
}

export default CategoriesDetail;