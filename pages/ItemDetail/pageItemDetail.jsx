import React from "react";
import { View, TouchableOpacity, Image, Text  } from "react-native"
import { styles } from './styles.js'; 
import Header from "../../components/Header/header.jsx"

const PageItemDetail = ({route}) => {
    const { product, img, precio } = route.params;

    return (
        <View style ={styles.container} >
            <Header titule={"Productos"}/>
            <TouchableOpacity style={styles.card}>
                <Image source={img} style={styles.imagen}/>
                <Text style={styles.nombre}>{product}</Text>
                <Text style={styles.nombre}>{precio}</Text>
             </TouchableOpacity>
        </View>
    )
};

export default PageItemDetail;