import React from 'react'
import { Pressable,Text } from 'react-native';
import styles from '../styleHelper.js';

function CancelButton(props) {
  return (
    <Pressable style={styles.cancelButton} onPress={props.handleCancel}>
        <Text style={styles.cancelButtonText}>Cancel</Text>
   </Pressable>);
  
}

export default CancelButton
