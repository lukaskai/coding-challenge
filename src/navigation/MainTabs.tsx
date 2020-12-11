import React from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { HomeStack } from './HomeStack'

const BottomTabs = createMaterialBottomTabNavigator()

export const MainTabs = () => (
  <BottomTabs.Navigator
    barStyle={{
      backgroundColor: '#3F3F47',
    }}>
    <BottomTabs.Screen
      name='Home'
      component={HomeStack}
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name='home' color={color} size={26} />
        ),
      }}
    />
  </BottomTabs.Navigator>
)
