import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AuthProvider from "./src/contexts/auth";
import Routes from "./src/router";

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <AuthProvider>
      <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
