import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles.js';
import categorias from '../../../globals/categorieData.js';
import CategoriesCard from '../categoriesCard/categoriesCard.jsx';

const CategoriesList = ( {navigation} ) => {
  return (
    <View >
      <View style={styles.container}>
        <FlatList
          data={categorias}
          renderItem={({ item }) => (
            <CategoriesCard
              nombre={item.nombre}
              imagenFuente={item.imagenFuente}
              navigation = {navigation}
            />
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default CategoriesList;