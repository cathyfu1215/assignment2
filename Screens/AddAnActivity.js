import React, { act } from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { TextInput } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import SaveButton from '../Components/SaveButton.js';
import CancelButton from '../Components/CancelButton.js';
import Checkbox from 'expo-checkbox';
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext.js';
import { useEffect } from 'react';
import { writeToDB } from '../Firebase/fireStoreHelper.js';
import { updateDB } from '../Firebase/fireStoreHelper.js';
import { Alert } from 'react-native';

function AddAnActivity(props) {

  const [isChecked, setChecked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: theme==='light'?'lightblue':'purple',
      },
    });
  }, []);

   /* 
  In order to reuse this component for both adding and editing an activity, 
  we need to check if there are already some params. 
  If there are, we will use them to populate the fields.
  */

  
  /* below are code for the activity dropdown picker */
  const [open, setOpen] = useState(false);
  const [activityName, setActivityName] = useState(props.route.params.data?props.route.params.data.activityName:"");
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
  const [duration, setDuration] = useState(props.route.params.data?props.route.params.data.duration:0);
  const [durationText, setDurationText] = useState(props.route.params.data?props.route.params.data.duration.toString():"");
  
  const handleDurationChange = (durationText) => {
    //console.log('duration', durationText);
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
      if(!props.route.params.data){ // this is a new activity
      // save the activity to the database
      // if the activity is special, save it with a field 'special' set to true
      if(duration>60){
        if(activityName === 'Running' || activityName === 'Weights'){
         special = true;
        }
      }
      else{
        special = false;
      }
      writeToDB({activityName, duration, date, special},'activities');
      props.navigation.goBack();
    }
    else{// this is an edit to existing activity

      Alert.alert(
        // Title
        'Important',
        // Message
        'Are you sure you want to save these changes?',
        [
          // Array of buttons
          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => {
            
            updateDB(props.route.params.data.id, 'activities',{activityName, duration, date, special:(props.route.params.data.special &&isChecked)?false:props.route.params.data.special});
            props.navigation.goBack();
          }},
        ]
      );
      

    }
  }

}
  

  const handleCancel = () => {
    props.navigation.goBack();
  }


  return (
    <View style={theme==='light'?styles.addEntryContainer:styles.addEntryContainerDark}>
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
    <View>
    {(props.route.params.data && props.route.params.data.special) 
      ?<View style={{flexDirection:'row',margin:10 }}>
      <View style={{flexDirection:'column'}}>
      <Text>This item is marked as special.</Text>
      <Text>Select the checkbox if you would like 
        to approve it.</Text>
        </View>
      <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
      </View>
      :<Text> </Text>}
    </View>
    <View style={styles.saveCancelContainer}>
      <CancelButton handleCancel={handleCancel}/>
      <SaveButton handleSave={handleSave}/>
    </View>
    
    </View>
  )
}

export default AddAnActivity
