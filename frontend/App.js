import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../frontend/src/pages/Home";
import MeuTime from "../frontend/src/pages/MeuTime";
import Projects from "../frontend/src/pages/Projects";
import SignIn from "../frontend/src/pages/SignIn";
import SignUp from "../frontend/src/pages/SignUp";
import Profile from "./src/pages/Profile";
import Jobs from "./src/pages/Jobs";
import Vacancies from "./src/pages/Vacancies";
import JobsEditar from "./src/pages/JobsEditar";

const Stack = createStackNavigator();

export default function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{ title: "SignIn", headerShown: false }} 
        />
        <Stack.Screen 
          name="Jobs" 
          component={Jobs} 
          options={{ title: "Jobs", headerShown: false }} 
        />
        <Stack.Screen 
          name="JobsEditar" 
          component={JobsEditar} 
          options={{ title: "JobsEditar", headerShown: false }} 
        />
        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ title: "SignUp", headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Home", headerShown: false }} 
        />
        <Stack.Screen 
          name="MeuTime" 
          component={MeuTime} 
          options={{ title: "Meu Time", headerShown: false }} 
        />
        <Stack.Screen 
          name="Projects" 
          component={Projects} 
          options={{ title: "Projects", headerShown: false }} 
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: "Profile", headerShown: false }} 
        />
        <Stack.Screen 
          name="Vacancies" 
          component={Vacancies} 
          options={{ title: "Vacancies", headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
