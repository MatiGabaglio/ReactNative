import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cartpage from "../../pages/Cart/Cartpage";

const Stack = createNativeStackNavigator();

function CartNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Cart" component={Cartpage} />
    </Stack.Navigator>
  );
}

export default CartNavigation;