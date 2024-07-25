import React from 'react'
import { Pressable } from 'react-native';
import styles from '../styleHelper.js';


function PressableListItem(props) {
    
    return (
        <Pressable style={({ pressed }) => [
            styles.itemlistline,
            { backgroundColor: pressed ? 'yellow' : styles.itemlistline.backgroundColor }
          ]}
        onPress={props.pressedFunction} >
        {props.children}
        </Pressable>
    )
}


export default PressableListItem
