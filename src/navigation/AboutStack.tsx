import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { AboutStackParamList } from './StackParamList'
import { About } from '../screens'

const Stack = createStackNavigator<AboutStackParamList>()

export type AboutStackProps = {}
export const AboutStack: React.FC<AboutStackProps> = ({}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='About' component={About} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
