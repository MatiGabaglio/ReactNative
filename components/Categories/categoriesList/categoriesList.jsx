import React from 'react';
import { View, FlatList } from 'react-native';
import { styles } from './styles.js';
import CategoriesCard from '../categoriesCard/categoriesCard.jsx';
import { useGetCategoriesQuery } from '../../../src/services/tiendaApi.js';

const CategoriesList = ( {navigation} ) => {
  const { data } = useGetCategoriesQuery()

  return (
    <View >
      <View style={styles.container}>
        <FlatList
          data={data}
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