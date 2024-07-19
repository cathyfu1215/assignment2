import React from 'react'
import { Pressable } from 'react-native';
import { View,Text } from 'react-native';
import styles from '../styleHelper.js';

function PressableButton({children, pressedFunction}) {
  return (
    <Pressable onPress={pressedFunction} style={styles.button}>
        <View><Text style={styles.buttonText}>{children}</Text></View>
    </Pressable>
  )
}

export default PressableButton;