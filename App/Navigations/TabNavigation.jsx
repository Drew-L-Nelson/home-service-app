import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name='home' component={HomeScreen} />
        <Tab.Screen name='booking' component={BookingScreen} />
        <Tab.Screen name='profile' component={ProfileScreen} />
    </Tab.Navigator>
  )
}