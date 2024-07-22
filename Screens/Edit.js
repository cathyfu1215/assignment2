import React from 'react'
import { View, Text } from 'react-native'
import AddAnActivity from './AddAnActivity.js';
import AddADietEntry from './AddADietEntry.js';
import styles from '../styleHelper.js';

function Edit(props) {
  console.log('type', props.route.params.type);
  console.log('data', props.route.params.data);
  
  return (

  <View style={styles.editContainer}>
  {props.route.params.type === 'activity'?
  <AddAnActivity/>:
  <AddADietEntry/>}


  {/* {props.route.params.data.special?
  <View style={{flex:0.5}}>
    <Text>special</Text>
  </View>
  :
  <View>
  <Text> </Text>
  </View>} */}
  
  
  
  </View>


  )
}

export default Edit
