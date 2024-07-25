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
import { View,Text } from 'react-native';
import styles from '../styleHelper.js';
import { FontAwesome6 } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext.js';



const Tab = createBottomTabNavigator();

function Home() {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Tab.Navigator 
    screenOptions={{
      tabBarStyle: {
        backgroundColor: theme==='light'?'lightblue':'purple', 
      },
      headerStyle: {
        backgroundColor: theme==='light'?'lightblue':'purple',
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
          {/* <Text>add activities</Text> */}
        </View>} navigation= {navigation} route={route} />}
        })}
      />
      <Tab.Screen 
        name="Diet" 
        component={Diet}
        options={({ navigation,route  }) => ({
          tabBarButton: (props) => <MyTabButton {...props} navigation={navigation} name="Diet" logo={<Ionicons name="fast-food-outline" size={24} color="black" />}/>,
          headerRight:()=> {return  <AddEntryButton type="AddADietEntry"
           name={<View style={styles.addEntryView}>
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
