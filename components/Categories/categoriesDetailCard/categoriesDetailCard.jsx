import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 
import { useNavigation } from '@react-navigation/native';

const CategoriesDetailCard = ({ product, img, precio }) => {
  const navigation = useNavigation();

  return (
    <View >
      <TouchableOpacity style={styles.card} 
        onPress={() => 
          navigation.navigate("Product Detail", {product, img, precio})
        }>
        <Image source={{uri: img}} style={styles.imagen} />
        <Text style={styles.nombre}>{product}</Text>
        <Text style={styles.nombre}>{precio}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesDetailCard;