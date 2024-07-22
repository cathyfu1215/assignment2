import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SaveButton from '../Components/SaveButton.js';
import CancelButton from '../Components/CancelButton.js';

function Edit(props) {
  console.log('type', props.route.params.type);
  console.log('data', props.route.params.data);
  
  if(props.route.params.type === 'activity'){
    return (
      <View>
        <Text>Activity</Text>
      </View>
    )
  }
  else{
    return (
      <View>
        <Text>Diet</Text>
      </View>
    )
  }
}

export default Edit
