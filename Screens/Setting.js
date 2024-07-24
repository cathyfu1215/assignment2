import React from 'react'
import { View, Text } from 'react-native'
import PressableButton from '../Components/PressableButton'
import styles from '../styleHelper'
import { ThemeContext } from '../Components/ThemeContext'
import { useContext } from 'react'



function Setting(props) {

  const { theme, toggleTheme } = useContext(ThemeContext);


  //console.log('props in Setting.js', props);

  function handlePress() {
    // console.log('current theme is', theme);
    // console.log('toggle theme button pressed');
    toggleTheme();
    //console.log('new theme is',theme);

    
  }
  return (
    <View style={theme==='light'?styles.itemContainer:styles.itemContainerDark}>
    <View style={{marginTop:150}}>
    <PressableButton pressedFunction={handlePress}>
      <View style={styles.toggleButtonContainer}>
      <Text style={styles.cancelButtonText}>🌞ToggleTheme🌛</Text>
      </View>
    </PressableButton>
    </View>
    </View>
  )
}

export default Setting;
