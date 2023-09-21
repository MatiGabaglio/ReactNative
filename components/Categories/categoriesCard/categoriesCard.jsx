import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 


const CategoriesCard = ({ nombre, imagenFuente, navigation }) => {
  return (
    <View >
      <TouchableOpacity style={styles.card} onPress={() => navigation.navigate("Categories Detail",{ nombre })}>
        <Image source={imagenFuente} style={styles.imagen} />
        <Text style={styles.nombre}>{nombre}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesCard;
