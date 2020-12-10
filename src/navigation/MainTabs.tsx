import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { HomeStack } from './HomeStack'
import { AboutStack } from './AboutStack'

const BottomTabs = createBottomTabNavigator()

export const MainTabs = () => (
  <BottomTabs.Navigator tabBarOptions={{ showLabel: false, keyboardHidesTabBar: true }}>
    <BottomTabs.Screen name='Home' component={HomeStack} />
    <BottomTabs.Screen name='About' component={AboutStack} />
  </BottomTabs.Navigator>
)
