import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import Jobs from "../pages/Jobs";
import JobsEditar from "../pages/JobsEditar";
import MeuTime from "../pages/MeuTime";
import Projects from "../pages/Projects";
import Profile from "../pages/Profile";
import Vacancies from "../pages/Vacancies";
import Colaboradores from "../pages/Colaboradores";
import EditProfile from "../pages/EditProfile";
import CadastroAvaliacao from "../pages/CadastrarAvaliacao";
import Assessment from "../pages/Assessment";
import EditarAvaliacao from "../pages/EditAvaliacao";

const AppStack = createStackNavigator();

export default function AppRoutes() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name="Home"
        component={Home}
        options={{ title: "Home", headerShown: false }}
      />
      <AppStack.Screen
        name="Jobs"
        component={Jobs}
        options={{ title: "Jobs", headerShown: false }}
      />
      <AppStack.Screen
        name="JobsEditar"
        component={JobsEditar}
        options={{ title: "JobsEditar", headerShown: false }}
      />
      <AppStack.Screen
        name="MeuTime"
        component={MeuTime}
        options={{ title: "Meu Time", headerShown: false }}
      />
      <AppStack.Screen
        name="Projects"
        component={Projects}
        options={{ title: "Projects", headerShown: false }}
      />
      <AppStack.Screen
        name="Profile"
        component={Profile}
        options={{ title: "Profile", headerShown: false }}
      />
      <AppStack.Screen
        name="Vacancies"
        component={Vacancies}
        options={{ title: "Vacancies", headerShown: false }}
      />
      <AppStack.Screen
        name="Colaboradores"
        component={Colaboradores}
        options={{ title: "Colaboradores", headerShown: false }}
      />
      <AppStack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ title: "Colaboradores", headerShown: false }}
      />
      <AppStack.Screen 
        name="CadastrarAvaliacao"
        component={CadastroAvaliacao}
        options={{title: "CadastrarAvaliacao", headerShown: false}}
      />
      <AppStack.Screen 
        name="Assessment"
        component={Assessment}
        options={{title: "Assessment", headerShown: false}}
      />
      <AppStack.Screen 
        name="EditarAvaliacao"
        component={EditarAvaliacao}
        options={{title: "EditarAvaliacao", headerShown: false}}
      />
    </AppStack.Navigator>
  );
}
