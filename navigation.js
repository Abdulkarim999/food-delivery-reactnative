import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import { View, Text } from 'react-native'
import React from 'react'
import RestarauntScreen from './screens/RestarauntScreen';
import HomesScreen from './screens/HomesScreen';


export default function Navigation() {
  return (
	 <NavigationContainer>
      <Stack.Navigator screenOptions={{
		headerShown:false
	  }}>
	  <Stack.Screen name="Homes" component={HomesScreen} />
	   <Stack.Screen name="Restaraunt" component={RestarauntScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}