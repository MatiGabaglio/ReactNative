import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AccountPage from "../../pages/Account/AccountPage";

const Stack = createNativeStackNavigator();

function AccountNavigation() {
  return (
    <Stack.Navigator >
      <Stack.Screen name="Cuenta" component={AccountPage} />
    </Stack.Navigator>
  );
}

export default AccountNavigation;