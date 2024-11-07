import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../frontend/src/pages/Home"
import MeuTime from "../frontend/src/pages/MeuTime"
import Projects from "../frontend/src/pages/Projects"
import SignIn from "../frontend/src/pages/SignIn"
import SignUp from "../frontend/src/pages/SignUp"
import Profile from "./src/pages/Profile";
import Jobs from "./src/pages/Jobs";
import Vacancies from "./src/pages/Vacancies";

const Stack = createStackNavigator();

export default function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Jobs">

      <Stack.Screen 
          name="SignIn" 
          component={SignIn} 
          options={{ title: "SignIn" }} 
        />

         <Stack.Screen 
          name="Jobs" 
          component={Jobs} 
          options={{ title: "Jobs" }} 
        />

        <Stack.Screen 
          name="SignUp" 
          component={SignUp} 
          options={{ title: "SignUp" }} 
        />

        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={{ title: "Home" }} 
        />
        <Stack.Screen 
          name="MeuTime" 
          component={MeuTime} 
          options={{ title: "Meu Time" }} 
        />
        <Stack.Screen 
          name="Projects" 
          component={Projects} 
          options={{ title: "Projects" }} 
        />

          <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ title: "Profile" }} 
        />

          <Stack.Screen 
          name="Vacancies" 
          component={Vacancies} 
          options={{ title: "Vacancies" }} 
        />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}