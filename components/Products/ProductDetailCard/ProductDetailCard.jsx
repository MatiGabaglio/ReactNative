import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 

const {product, img, precio} = navigation.state.params;

const ProductDetailCard = ({ product, precio, img }) => {
  return (
    <View>
      <TouchableOpacity style={styles.card}>
        <Image source={img} style={styles.imagen}/>
        <Text style={styles.nombre}>{product}</Text>
        <Text style={styles.nombre}>{precio}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailCard;
