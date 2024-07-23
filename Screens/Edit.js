import React from 'react'
import { View, Text, Pressable } from 'react-native'
import AddAnActivity from './AddAnActivity.js';
import AddADietEntry from './AddADietEntry.js';
import styles from '../styleHelper.js';
import PressableButton from '../Components/PressableButton.js';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

function Edit(props) {
  console.log('type', props.route.params.type);
  console.log('data', props.route.params.data);

 
  function deleteHandler() {
    console.log("delete entry", props.route.params.data);
  }
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => {
        return (
          <PressableButton pressedFunction={deleteHandler} >
            <Feather name="trash-2" size={24} color="black" />
          </PressableButton>
        );
      },
    });
  }, []);
  
 
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
