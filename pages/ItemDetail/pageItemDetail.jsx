import { View } from "react-native"
import { styles } from './styles.js'; 
import prodcutList from "../../components/Products/productList/productList.jsx" 
import Header from "../../components/Header/header.jsx"

const PageItemDetail = ({navigation}) => {
    return (
        <View style ={styles.container} >
            <Header titule={"Productos"}/>
            <prodcutList />
        </View>
    )
};

export default PageItemDetail;