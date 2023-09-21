import { View } from 'react-native';
import React from "react";
import CategoriesList from '../../components/Categories/categoriesList/categoriesList.jsx';
import Header from '../../components/Header/header.jsx';
import { Text } from 'react-native';


const Home = ( {navigation} ) => {
  return (
    <View >
      <Header titule={"Categorias"}/>
      <CategoriesList navigation={navigation}/>
    </View>
  );
}

export default Home;