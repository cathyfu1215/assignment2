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
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'Walking', value: 'Walking'},
    {label: 'Running', value: 'Running'},
    {label: 'Swimming', value: 'Swimming'},
    {label: 'Weights', value: 'Weights'},
    {label: 'Yoga', value: 'Yoga'},
    {label: 'Cycling', value: 'Cycling'},
    {label: 'Hiking', value: 'Hiking'},
   
  ]);

  /*  below are code for the date picker */
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
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
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
    />
    <Text style={styles.addEntryText}>Duration (min) *</Text>
    <TextInput style={styles.textInput} defaultValue=""/>
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
