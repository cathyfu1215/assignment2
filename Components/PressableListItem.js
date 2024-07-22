import React from 'react'
import { Pressable } from 'react-native';
import styles from '../styleHelper.js';


function PressableListItem(props) {
    
    return (
        <Pressable style ={styles.itemlistline} onPress={props.pressedFunction} >
        {props.children}
        </Pressable>
    )
}


export default PressableListItem
