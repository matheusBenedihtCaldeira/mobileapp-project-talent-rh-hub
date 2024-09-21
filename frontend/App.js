
import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/router';
import { PaperProvider } from 'react-native-paper';
import { MD3LightTheme, adaptNavigationTheme } from 'react-native-paper';
import customTheme from './src/style/default';
import Home from './src/pages/Home';
import SignUp from './src/pages/SignUp';
export default function App() {
  return(
    <PaperProvider theme={customTheme}>
      <NavigationContainer theme={customTheme}>
        <StatusBar/>
        <Home />
      </NavigationContainer>
    </PaperProvider>
  )
}