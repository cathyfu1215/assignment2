import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Diet from './Diet.js';
import Activities from './Activities.js';
import Setting from './Setting.js';
import MyTabButton from '../Components/MyTabButton.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function Home() {
  function handlePressActivity() {
    console.log('activity button pressed');
  }
  function handlePressDiet() {
    console.log('diet button pressed');
  }
  function handlePressSetting() {
    console.log('setting button pressed');
  }


  return (
    <Tab.Navigator>
    <Tab.Screen name="Activities" component={Activities} 
    options={{
      tabBarButton: (props) => <MyTabButton name="Activities" logo={<FontAwesome5 name="running" size={24} color="black" />} onPress={handlePressActivity}/>
    }}/>
    <Tab.Screen name="Diet" component={Diet}
    options={{
      tabBarButton: (props) => <MyTabButton name="Diet" logo={<Ionicons name="fast-food-outline" size={24} color="black" />} onPress={handlePressDiet}/>
    }}/>
    <Tab.Screen name="Setting" component={Setting}
    options={{
      tabBarButton: (props) => <MyTabButton name="Setting" logo={<Feather name="settings" size={24} color="black" />} onPress={handlePressSetting}/>
    }}/>
    </Tab.Navigator>
  )
}

export default Home
