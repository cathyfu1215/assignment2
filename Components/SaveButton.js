import React from 'react'
import { Pressable, Text } from 'react-native';
import styles from '../styleHelper.js';

function SaveButton() {
  return (
   <Pressable style={styles.saveButton}>
        <Text style={styles.cancelButtonText}>Save</Text>
   </Pressable>);
  
}

export default SaveButton
