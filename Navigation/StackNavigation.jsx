import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../pages/Home/home";
import PageCategoriesDetail from "../pages/CategoriesDetail/PageCategoriesDetail";
import PageItemDetail from "../pages/ItemDetail/pageItemDetail";


const Stack = createNativeStackNavigator();

function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories Detail" component={PageCategoriesDetail} />
        <Stack.Screen name="Product Detail" component={PageItemDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigation;