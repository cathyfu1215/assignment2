import React from 'react'
import { View,Text } from 'react-native'
import styles from '../styleHelper.js'
import { Pressable} from 'react-native'


function MyTabButton(props) {
  return (
    <Pressable onPress={props.onPress}>
      <View style={styles.tabButtonContainer}>
          <View>{props.logo}</View>
          <View><Text>{props.name}</Text></View>
      </View>
    </Pressable>
  )
}

export default MyTabButton
