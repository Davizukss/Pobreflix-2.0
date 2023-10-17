import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import MovieScreen from '../screens/MovieScreen';
import PersonScreen from '../screens/PersonScreen';
import SearchScreen from '../screens/SearchScreen';
import TelaBemVindo from '../screens/TelaBemVindo';
import TelaLogin from '../screens/TelaLogin';
import Registre from '../screens/TelaRegistre'
const Stack = createNativeStackNavigator();


export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaBemVindo'>
        <Stack.Screen name="TelaBemVindo" options={{ headerShown: false }} component={TelaBemVindo} />
        <Stack.Screen name="Registre" options={{ headerShown: false }} component={Registre} />
        <Stack.Screen name="Login" options={{ headerShown: false }} component={TelaLogin} />
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
        <Stack.Screen name="Movie" options={{headerShown: false}} component={MovieScreen} />
        <Stack.Screen name="Person" options={{headerShown: false}} component={PersonScreen} />
        <Stack.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}
