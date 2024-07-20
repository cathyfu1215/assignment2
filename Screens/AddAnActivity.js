import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import PressableButton from '../Components/PressableButton.js';
import { Pressable } from 'react-native';

function AddAnActivity() {

  /* below are code for the dropdown picker */
  const [open, setOpen] = useState(false);
  const [activityName, setActivityName] = useState(null);
  const [items, setItems] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},
    {label: 'Cycling', value: 'Cycling'},
    {label: 'Hiking', value: 'Hiking'},
   
  ]);

  /* below are code for the duration text input */
  const [duration, setDuration] = useState(0);
  const [durationText, setDurationText] = useState('');
  
  const handleDurationChange = (durationText) => {
    console.log('duration', durationText);
    if(!isNaN(parseInt(durationText)) && parseInt(durationText)>0){
      setDuration(parseInt(durationText));
    }
    else{
      alert('Please enter a valid number for duration');
    }
  }

  /*  below are code for the date picker */
  const [date, setDate] = useState(new Date());
  const mode = 'date';
  const [show, setShow] = useState(true);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(true);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  return (
    <View style={styles.addEntryContainer}>
    <Text style={styles.addEntryText}>Activity *</Text>
    <DropDownPicker
      open={open}
      value={activityName}
      items={items}
      setOpen={setOpen}
      setValue={setActivityName}
      setItems={setItems}
    />
    <Text style={styles.addEntryText}>Duration (min) *</Text>
    <TextInput style={styles.textInput} value={durationText} onChangeText={(text)=>{setDurationText(text)}} onBlur={()=>handleDurationChange(durationText)}/>
    <Text style={styles.addEntryText}>Date *</Text>
    <View>
      <Pressable onPress={showDatepicker}>
      </Pressable>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
    
    </View>
  )
}

export default AddAnActivity
