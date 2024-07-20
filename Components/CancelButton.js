import React from 'react'
import { Pressable,Text } from 'react-native';
import styles from '../styleHelper.js';

function CancelButton() {
  return (
    <Pressable style={styles.cancelButton}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
   </Pressable>);
  
}

export default CancelButton
