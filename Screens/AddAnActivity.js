import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';

function AddAnActivity() {
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
    <Text style={styles.addEntryText}>Date *</Text>
    </View>
  )
}

export default AddAnActivity
