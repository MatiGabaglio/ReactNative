import React from "react";
import store from "./src/store/index.js";
import { Provider } from "react-redux";
import MainNavigation from "./src/Navigation/MainNavigation.jsx";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
}