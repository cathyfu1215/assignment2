import React from 'react'
import { View, Text } from 'react-native'
import PressableButton from '../Components/PressableButton'



function Setting() {
  function handlePress() {
    console.log('toggle theme button pressed');
  }
  return (
    <View>
    <PressableButton children={'toggle theme'} pressedFunction={handlePress}/>
    </View>
  )
}

export default Setting;
