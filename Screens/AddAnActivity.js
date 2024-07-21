import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SaveButton from '../Components/SaveButton.js';
import CancelButton from '../Components/CancelButton.js';

function AddAnActivity() {

  /* below are code for the activity dropdown picker */
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
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    setShow(false);
  };

  /* below are code for the save and cancel buttons */
  const handleSave = () => {
    console.log('save button pressed');
    // validate the three inputs
    if(activityName == null){
      alert('Please select an activity');
    }
    else if(duration == 0){
      alert('Please enter a valid number for duration');
    }
    else if(date == null){
      alert('Please select a date');
    }
    else{
      console.log('activity added:' ,activityName, duration,date);
    }
  }

  const handleCancel = () => {
    console.log('cancel button pressed');
  }


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
    <TextInput style={styles.textInput} editable={false} value={date.toDateString()} onPressIn={()=>setShow(!show)}/>
    <View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode='date'
          onChange={onChange}
          display="inline"
        />
      )}
    </View>
    <View style={styles.saveCancelContainer}>
      <CancelButton handleCancel={handleCancel}/>
      <SaveButton handleSave={handleSave}/>
    </View>
    
    </View>
  )
}

export default AddAnActivity
