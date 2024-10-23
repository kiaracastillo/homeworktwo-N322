import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../../constants/Colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      headerShown: false,
      headerTitle: "Home",
      tabBarActiveTintColor: Colors.DEV_PRIMARY,

    }}> 
      <Tabs.Screen name="index" options={{headerShown: false,
      tabBarIcon: ({color}) => (
        <Feather name="home" size={24} color={color} />
        ),
        
       }} />

      <Tabs.Screen name="products" options={{headerShown: false,
        tabBarIcon: ({color}) => (
          <AntDesign name="appstore-o" size={24} color={color} />
          ),
       }} />
      <Tabs.Screen name="profile" options={{headerShown: false,
        tabBarIcon: ({color}) => (
          <Ionicons name="person-circle-outline" size={24} color={color} />
          ),
       }} />


    </Tabs>
  )
}