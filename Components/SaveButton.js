import React from 'react'
import { Pressable, Text } from 'react-native';
import styles from '../styleHelper.js';

function SaveButton(props) {
  return (
   <Pressable style={styles.saveButton} onPress={props.handleSave}>
        <Text style={styles.cancelButtonText}>Save</Text>
   </Pressable>);
  
}

export default SaveButton
