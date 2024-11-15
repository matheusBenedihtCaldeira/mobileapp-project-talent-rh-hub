import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'


import Projects from '../pages/Projects';
import Home from '../pages/Home';
import MeuTime from '../pages/MeuTime';
import Profile from '../pages/Profile';
import JobsEditar from '../pages/JobsEditar';

const AuthStack = createStackNavigator();

export default function AuthRoutes(){
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen 
            name='Projects'
            component={Projects}
            options={{
                headerShown: false
            }}
            />

            <AuthStack.Screen 
            name='JobsEditar'
            component={JobsEditar}
            options={{
                headerShown: false
            }}
            />

            <AuthStack.Screen 
            name='Home'
            component={Home}
            options={{
                headerShown: false
            }}
            />

        <AuthStack.Screen 
            name='MeuTime'
            component={MeuTime}
            options={{
                headerShown: false
            }}
            />

        <AuthStack.Screen 
            name='Profile'
            component={Profile}
            options={{
                headerShown: false
            }}
            />


            
        </AuthStack.Navigator>
    )
}