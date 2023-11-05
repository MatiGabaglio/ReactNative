import React from "react";
import { View, TouchableOpacity, Image, Text, Pressable  } from "react-native"
import { styles } from './catrItemStyles.js'; 
import Header from "../../components/Header/header.jsx"

const CartItem = ({item}) => {
    return (
        <View style ={styles.container} >
            <Header titule={"Productos"}/>
            <TouchableOpacity style={styles.card}>
                <Text style={styles.nombre}>{item.product}</Text>
                <Text style={styles.nombre}>{item.precio}</Text>
                <Text style={styles.nombre}>{item.quantity}</Text>
            </TouchableOpacity>
        </View>
    )
};

export default CartItem;

