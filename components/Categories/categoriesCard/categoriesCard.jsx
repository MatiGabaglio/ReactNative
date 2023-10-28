import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './styles.js'; 
import { useDispatch } from 'react-redux';
import { setCategoriaSeleccionada } from '../../../src/features/slice.jsx';

const CategoriesCard = ({ nombre, imagenFuente, navigation }) => {
  const dispatch = useDispatch();
  return (
    <View >
      <TouchableOpacity style={styles.card} 
        onPress={() => {
        dispatch(setCategoriaSeleccionada(nombre))
        navigation.navigate("Categories Detail",{ nombre })
        }}>
        <Image source={{ uri: imagenFuente }} style={styles.imagen} />
        <Text style={styles.nombre}>{nombre}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoriesCard;