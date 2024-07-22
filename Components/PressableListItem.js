import React from 'react'
import { Pressable } from 'react-native';
import { View,Text } from 'react-native';
import styles from '../styleHelper.js';


function PressableListItem({children, pressedFunction}) {
    console.log('list item pressed, children: ', children);
    return (
        <Pressable style ={styles.itemlistline} onPress={pressedFunction} >
        {children}
        </Pressable>
    )
}


export default PressableListItem
