import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MainTabs } from './MainTabs'

const Stack = createStackNavigator()
export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        headerMode='none'
        screenOptions={{ animationEnabled: false }}
        mode='modal'>
        <Stack.Screen name='MainTabs' component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export * from './StackParamList'
