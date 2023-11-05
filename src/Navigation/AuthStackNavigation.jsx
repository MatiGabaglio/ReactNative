import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthStackNavigation() {
  return (
    <AuthStack.Navigator initialRouteName="SignUp">
      <AuthStack.Screen name="SignUp" component={SignUp} />
      <AuthStack.Screen name="Login" component={Login} />
    </AuthStack.Navigator>
  );
}

export default AuthStackNavigation;