import React from 'react'
import { View, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Diet from './Diet.js';
import Activities from './Activities.js';
import Setting from './Setting.js';



const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Activities" component={Activities}/>
    <Tab.Screen name="Diet" component={Diet}/>
    <Tab.Screen name="Setting" component={Setting}/>
    </Tab.Navigator>
  )
}

export default Home
