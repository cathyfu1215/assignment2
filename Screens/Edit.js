import React from 'react'
import { View, Text } from 'react-native'
import AddAnActivity from './AddAnActivity.js';
import AddADietEntry from './AddADietEntry.js';
import styles from '../styleHelper.js';

function Edit(props) {
  console.log('type', props.route.params.type);
  console.log('data', props.route.params.data);
  
 
  if(props.route.params.type === 'activity'){
    return (
      <AddAnActivity navigation={props.navigation} route={props.route} />
    )
  }
  else{
    return (
      <AddADietEntry navigation={props.navigation} route={props.route} />
    )
  }
 
}

export default Edit
