import React from "react";
import { store } from "./src/store/index";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { BottomTabNavigation } from "./src/Navigation/BottomTabNavigation.jsx";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <BottomTabNavigation />
      </NavigationContainer>
    </Provider>
  );
}