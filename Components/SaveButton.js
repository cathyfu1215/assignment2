import React from 'react'
import { Pressable, Text } from 'react-native';
import styles from '../styleHelper.js';

function SaveButton(props) {
  return (
   <Pressable 
   style={({ pressed }) => [
     styles.saveButton,
     { backgroundColor: pressed ? 'yellow' : styles.saveButton.backgroundColor }
   ]}
   android_ripple={{color: 'yellow'}}
   
   onPress={props.handleSave}>
        <Text style={styles.cancelButtonText}>Save</Text>
   </Pressable>);
  
}

export default SaveButton
