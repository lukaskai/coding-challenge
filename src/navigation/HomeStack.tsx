import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { HomeStackParamList } from './StackParamList'
import { Home } from '../screens'

const Stack = createStackNavigator<HomeStackParamList>()

type HomeStackProps = {}
export const HomeStack: React.FC<HomeStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
