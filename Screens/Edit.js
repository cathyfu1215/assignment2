import React from 'react'
import { View, Text, Pressable } from 'react-native'
import AddAnActivity from './AddAnActivity.js';
import AddADietEntry from './AddADietEntry.js';
import styles from '../styleHelper.js';
import PressableButton from '../Components/PressableButton.js';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { Alert } from 'react-native';
import { deleteFromDB } from '../Firebase/fireStoreHelper.js';

function Edit(props) {
  console.log('type', props.route.params.type);
  console.log('data', props.route.params.data);

 
  function deleteHandler() {
    //console.log("delete entry", props.route.params.data, 'type', props.route.params.type);
    if(props.route.params.type === 'activity'){
      //pop up an aleat to confirm the delete, with two buttons: yes and no
      //if yes, delete the entry from the database
      //if no, do nothing
      
      Alert.alert(
        // Title
        'Important',
        // Message
        'Are you sure you want to delete this entry?',
        [
          // Array of buttons
          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => {
            console.log('OK Pressed'); 
            console.log('delete activity',props.route.params.data.id);
            deleteFromDB(props.route.params.data.id, 'activities');
            props.navigation.goBack();
          }},
        ]
      );
         
      
     
    }
    else{
      Alert.alert(
        // Title
        'Important',
        // Message
        'Are you sure you want to delete this entry?',
        [
          // Array of buttons
          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => {
            console.log('OK Pressed'); 
            console.log('delete diet',props.route.params.data.id);
            deleteFromDB(props.route.params.data.id, 'diets');
            props.navigation.goBack();}},
        ]
      );
      
    }
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
