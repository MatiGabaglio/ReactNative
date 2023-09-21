import { View } from "react-native"
import { styles } from './styles.js'; 
import ProductDetailCard from "../../components/Products/ProductDetailCard/ProductDetailCard.jsx"
import Header from "../../components/Header/header.jsx"

const PageItemDetail = ({navigation}) => {

    return (
        <View style ={styles.container} >
            <Header titule={"Productos"}/>
            <ProductDetailCard />
        </View>
    )
};

export default PageItemDetail;