import React from 'react'
import { View, Text } from 'react-native'
import PressableButton from '../Components/PressableButton'
import styles from '../styleHelper'



function Setting() {
  function handlePress() {
    console.log('toggle theme button pressed');
    
  }
  return (
    <View>
    <PressableButton pressedFunction={handlePress}>
      <View style={styles.toggleButtonContainer}>
      <Text style={styles.cancelButtonText}>🌞ToggleTheme🌛</Text>
      </View>
    </PressableButton>
    </View>
  )
}

export default Setting;
