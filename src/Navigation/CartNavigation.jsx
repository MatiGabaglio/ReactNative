import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../../pages/Cart/cart";

const Stack = createNativeStackNavigator();

function CartNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Cart" component={Cart} />
    </Stack.Navigator>
  );
}

export default CartNavigation;