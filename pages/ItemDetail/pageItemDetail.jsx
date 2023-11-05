import React from "react";
import { View, TouchableOpacity, Image, Text, Pressable  } from "react-native"
import { styles } from './styles.js'; 
import Header from "../../components/Header/header.jsx"
import { addItem } from "../../src/features/cart/cartSlice.js";
import { useDispatch } from "react-redux";

const PageItemDetail = ({route}) => {
    const { product, img, precio } = route.params;
    const dispatch = useDispatch();
    
    const handleAddToCart = () => {
        dispatch(addItem({...product, quantity: 1}));
    };

    return (
        <View style ={styles.container} >
            <Header titule={"Productos"}/>
            <TouchableOpacity style={styles.card}>
                <Image source={{uri: img}} style={styles.imagen}/>
                <Text style={styles.nombre}>{product}</Text>
                <Text style={styles.nombre}>{precio}</Text>
                <View style={styles.cartButtonsContainer}>
                    <TouchableOpacity onPress={handleAddToCart}>
                        <Text style={styles.addItemText}>Agregar al carrito</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.removeItemText}>Eliminar del carrito</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

        </View>
    )
};

export default PageItemDetail;