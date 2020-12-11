import { StackNavigationProp } from '@react-navigation/stack'
import { RouteProp } from '@react-navigation/native'

export type HomeStackParamList = {
  Home: undefined
}

export type AboutStackParamList = {
  About: undefined
}

export type HomeStackNavProps<T extends keyof HomeStackParamList> = {
  navigation: StackNavigationProp<HomeStackParamList, T>
  route: RouteProp<HomeStackParamList, T>
}

export type AboutStackNavProps<T extends keyof AboutStackParamList> = {
  navigation: StackNavigationProp<AboutStackParamList, T>
  route: RouteProp<AboutStackParamList, T>
}
