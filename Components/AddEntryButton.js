import React from 'react'
import { View, Text, Pressable } from 'react-native';
import styles from '../styleHelper.js';
import PressableButton from './PressableButton';


function AddEntryButton(props) {
  function handleAddEntry(){
 
    console.log('add entry button pressed, props are: ', props);
    props.navigation.navigate(props.type);
  }


  return (
    <View>
        <PressableButton pressedFunction={handleAddEntry}>
          <Text style={styles.buttonText}>{props.name}</Text>
        </PressableButton>

    </View>
  )
}

export default AddEntryButton
