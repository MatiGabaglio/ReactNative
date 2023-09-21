import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 

const ProductCard = ({ product, precio, img }) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image source={img} style={styles.imagen} onPress={() => navigation.navigate("Product Detail")}/>
        <Text style={styles.nombre}>{product}</Text>
        <Text style={styles.nombre}>{precio}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCard;
