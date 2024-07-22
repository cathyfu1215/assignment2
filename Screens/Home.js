import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Diet from './Diet.js';
import Activities from './Activities.js';
import Setting from './Setting.js';
import MyTabButton from '../Components/MyTabButton.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import AddEntryButton from '../Components/AddEntryButton.js';
import { View } from 'react-native';
import styles from '../styleHelper.js';
import { FontAwesome6 } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

function Home() {

  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: {
        backgroundColor: 'lightblue', // This line sets the background color of the tab bar
      },
      headerStyle: {
        backgroundColor: 'lightblue',
      },
    }}
    >
      <Tab.Screen 
        name="Activities" 
        component={Activities} 
        options={({ navigation, route }) => ({
          tabBarButton: (props) => <MyTabButton {...props} navigation={navigation} name="Activities" logo={<FontAwesome5 name="running" size={24} color="black" />} />,
          headerRight:()=> {return  <AddEntryButton type="AddAnActivity" 
          name={<View style={styles.addEntryView}>
          <FontAwesome6 name="plus" size={24} color="black" />
          <FontAwesome5 name="running" size={24} color="black" />
        </View>} navigation= {navigation} route={route} />}
        })}
      />
      <Tab.Screen 
        name="Diet" 
        component={Diet}
        options={({ navigation,route  }) => ({
          tabBarButton: (props) => <MyTabButton {...props} navigation={navigation} name="Diet" logo={<Ionicons name="fast-food-outline" size={24} color="black" />}/>,
          headerRight:()=> {return  <AddEntryButton type="AddADietEntry" name={<View style={styles.addEntryView}>
          <FontAwesome6 name="plus" size={24} color="black" />
          <Ionicons name="fast-food-outline" size={24} color="black" />
          </View>} navigation= {navigation} route={route} />},
        })}
        
      />
      <Tab.Screen 
          name="Setting" 
          component={Setting}
          options={({ navigation }) => ({
          tabBarButton: (props) => <MyTabButton {...props} navigation={navigation} name="Setting" logo={<Feather name="settings" size={24} color="black" />}/>
          })}
      />
    </Tab.Navigator>
  )
}

export default Home
