import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import { useState } from 'react';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SaveButton from '../Components/SaveButton.js';
import CancelButton from '../Components/CancelButton.js';

function AddADietEntry() {

  /* below are code for the dietName text input */
  const [dietName, setDietName] = useState('');
  const [dietNameText, setDietNameText] = useState('');
  
  const handledietNameChange = (dietNameText) => {
    console.log('dietNameText', dietNameText);
    if(dietNameText.length>0){
      setDietName(dietNameText);
    }
    else{
      alert('Please enter a name for the diet');
    }
  }

  /* below are code for the calories text input */
  const [calories, setCalories] = useState(0);
  const [caloriesText, setCaloriesText] = useState('');
  
  const handleCaloriesChange = (durationText) => {
    console.log('calories', caloriesText);
    if(!isNaN(parseInt(caloriesText)) && parseInt(caloriesText)>0){
      setCalories(parseInt(caloriesText));
    }
    else{
      alert('Please enter a valid number for calories');
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
    if(dietName.length === 0){
      alert('Please enter a name for the diet');
    }
    else if(calories == 0){
      alert('Please enter a valid number for calories');
    }
    else if (date == null){
      alert('Please select a date');
    }
    else{
      // save the data
      console.log('diet added:' ,dietName, calories,date);
    }
  }

  const handleCancel = () => {
    console.log('cancel button pressed');
  }

  return (
    <View style={styles.addEntryContainer}>
    <Text style={styles.addEntryText}>Description *</Text>
    <TextInput style={styles.textInputBig} value={dietNameText} onChangeText={(text)=>{setDietNameText(text)}} onBlur={()=>handledietNameChange(dietNameText)}/>
    <Text style={styles.addEntryText}>Calories *</Text>
    <TextInput style={styles.textInput} value={caloriesText} onChangeText={(text)=>{setCaloriesText(text)}} onBlur={()=>handleCaloriesChange(caloriesText)}/>
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

export default AddADietEntry
