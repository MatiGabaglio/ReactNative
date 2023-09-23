import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./StackNavigation";
import CartNavigation from "./CartNavigation";
import { StyleSheet } from "react-native";

const BottomTab = createBottomTabNavigator();

function BottomTabNavigation() {
    return(
        <BottomTab.Navigator 
            initialRouteName="Tienda" 
            screenOptions={{
                headerShown: false, 
                tabBarShowLabel: false, 
                tabBarStyle: styles.tabBar
            }}>
            <BottomTab.Screen name="Tienda" component={StackNavigation} />
            <BottomTab.Screen name="Cart" component={CartNavigation} />
        </BottomTab.Navigator>
    )
}

const styles = StyleSheet.create({
    tabBar: {
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,        
    },
});

export default BottomTabNavigation;