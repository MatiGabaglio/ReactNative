import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 

const CategoriesDetailCard = ({ product, img, precio }) => {
  return (
    <View >
      <TouchableOpacity style={styles.card}>
        <Image source={img} style={styles.imagen} />
        <Text style={styles.nombre}>{product}</Text>
        <Text style={styles.nombre}>{precio}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesDetailCard;
