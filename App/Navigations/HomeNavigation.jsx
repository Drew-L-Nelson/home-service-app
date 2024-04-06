import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import BusinessListByCategory from '../Screens/BusinessListByCategory/BusinessListByCategory';
import BusinessDetailsScreen from '../Screens/BusinessDetailsScreen/BusinessDetailsScreen';
import RegisterScreen from '../Screens/RegisterScreen/RegisterScreen';
import Login2 from '../Screens/LoginScreen/Login2';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='home-screen' component={HomeScreen} />
        <Stack.Screen name='business-list' component={BusinessListByCategory} />
        <Stack.Screen name='business-detail' component={BusinessDetailsScreen} />
        <Stack.Screen name='register-screen' component={RegisterScreen} />
        <Stack.Screen name='login-screen' component={Login2} />
    </Stack.Navigator>
  )
}