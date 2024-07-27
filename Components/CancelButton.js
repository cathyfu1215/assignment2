import React from 'react'
import { Pressable,Text } from 'react-native';
import styles from '../styleHelper.js';

function CancelButton(props) {
  return (
    <Pressable 
    style={({ pressed }) => [
      styles.cancelButton,
      { backgroundColor: pressed ? 'yellow' : styles.cancelButton.backgroundColor }
    ]}
    android_ripple={{color: 'yellow'}}
    
    onPress={props.handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
   </Pressable>);
  
}

export default CancelButton
