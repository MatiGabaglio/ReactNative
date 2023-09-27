import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../pages/Home/home";
import PageCategoriesDetail from "../../pages/CategoriesDetail/PageCategoriesDetail";
import PageItemDetail from "../../pages/ItemDetail/PageItemDetail"


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Categories Detail" component={PageCategoriesDetail} />
      <Stack.Screen name="Product Detail" component={PageItemDetail} />
    </Stack.Navigator>
  );
}

export default StackNavigation;