import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Header from "../../components/Header/header";
import CategoriesDetailCard from "../../components/Categories/categoriesDetailCard/categoriesDetailCard";
import ProductData from "../../src/globals/productsData";
import { useSelector } from "react-redux";

const PageCategoriesDetail = ({ navigation }) => {
  const categoria = useSelector((state) => state.tienda.categoriaSeleccionada);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const filtered = ProductData.filter((product) => product.categoria === categoria);
    setFilteredProducts(filtered);
  }, [categoria]);

  return (
    <View>
      <Header title={categoria} />
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
