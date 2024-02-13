import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BookingScreen from '../Screens/BookingScreen/BookingScreen';
import ProfileScreen from '../Screens/ProfileScreen/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';
import OrderingScreen from '../Screens/OrderingScreen/OrderingScreen';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{ 
        headerShown: false, 
        tabBarActiveTintColor: Colors.DARK_BLUE
      }}>
        <Tab.Screen 
          name='home' 
          component={HomeScreen} 
          options={{
            tabBarLabel: ({color})=>(
              <Text style={{color: color, fontSize: 12, marginTop: -7 }}>
                Home
              </Text>
            ),
            tabBarIcon: ({color, size})=>(
              <Ionicons name="home" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name='booking' 
          component={BookingScreen} 
          options={{
            tabBarLabel: ({color})=>(
              <Text style={{color: color, fontSize: 12, marginTop: -7}}>
                Booking
              </Text>
            ),
            tabBarIcon: ({color, size})=>(
              <Ionicons name="calendar" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name='order' 
          component={OrderingScreen} 
          options={{
            tabBarLabel: ({color})=>(
              <Text style={{color: color, fontSize: 12, marginTop: -7 }}>
                Order
              </Text>
            ),
            tabBarIcon: ({color, size})=>(
              <Ionicons name="fast-food" size={size} color={color} />
            )
          }}
        />

        <Tab.Screen 
          name='profile' 
          component={ProfileScreen} 
          options={{
            tabBarLabel: ({color})=>(
              <Text style={{color: color, fontSize: 12, marginTop: -7}}>
                Profile
              </Text>
            ),
            tabBarIcon: ({color, size})=>(
              <Ionicons name="person" size={size} color={color} />
            )
          }}
        />
        
    </Tab.Navigator>
  )
}