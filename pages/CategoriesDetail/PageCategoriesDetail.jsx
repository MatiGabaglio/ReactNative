import { View } from "react-native"
import CategoriesDetail from "../../components/Categories/categoriesDetail/categoriesDetail"
import Header from "../../components/Header/header"

const PageCategoriesDetail = (navigation) => {
    return (
        <View>
            <Header titule={"Productos"}/>
            <CategoriesDetail />
        </View>
    )
};

export default PageCategoriesDetail;