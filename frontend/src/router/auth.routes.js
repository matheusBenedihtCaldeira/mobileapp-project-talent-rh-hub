import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'


import Projects from '../pages/Projects';
import Home from '../pages/Home';
import MeuTime from '../pages/MeuTime';

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


            
        </AuthStack.Navigator>
    )
}