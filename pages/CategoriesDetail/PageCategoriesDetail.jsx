import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import Header from "../../components/Header/header";
import CategoriesDetailCard from "../../components/Categories/categoriesDetailCard/categoriesDetailCard";
import ProductData from "../../src/globals/productsData";
import { useSelector } from "react-redux";
import { useGetProductsQuery } from "../../src/store/tiendaApi.js";

const PageCategoriesDetail = ({ navigation }) => {
  const { data: products } = useGetProductsQuery();

  const categoria = useSelector((state) => state.tienda.categoriaSeleccionada);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (products) {
      const filtered = products.filter((data) => data.categoria === categoria);
      setFilteredProducts(filtered);
    }
  }, [categoria, products]);  

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
