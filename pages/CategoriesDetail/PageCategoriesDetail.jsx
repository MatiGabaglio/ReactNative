import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Header from "../../components/Header/header";
import CategoriesDetailCard from "../../components/Categories/categoriesDetailCard/categoriesDetailCard";
import ProductData from "../../src/globals/productsData";

const PageCategoriesDetail = ({ route, navigation }) => {
  const { nombre } = route.params;
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = ProductData.filter((product) => product.categoria === nombre);
    setFilteredProducts(filtered);
  }, [nombre]);

  return (
    <View>
      <Header title={nombre} />
      <FlatList
        data={filteredProducts}
        renderItem={({ item }) => (
          <CategoriesDetailCard
            product={item.product}
            img={item.img}
            precio={item.precio}
            navigation={navigation}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default PageCategoriesDetail;
