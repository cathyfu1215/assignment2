import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import React from 'react';
import styles from './styleHelper.js';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddAnActivity from './Screens/AddAnActivity.js';
import AddADietEntry from './Screens/AddADietEntry.js';
import Edit from './Screens/Edit.js';
import Home from './Screens/Home.js';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
     <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="AddAnActivity" component={AddAnActivity}/>
      <Stack.Screen name="AddADietEntry" component={AddADietEntry}/>
      <Stack.Screen name="Edit" component={Edit}/>
    
                                             
    </Stack.Navigator>
    </NavigationContainer>
  );
}

