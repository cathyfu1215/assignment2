import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styleHelper.js'
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

function AddADietEntry(props) {
  const [isChecked, setChecked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    props.navigation.setOptions({
      headerStyle: {
        backgroundColor: theme==='light'?'lightblue':'purple',
      },
    });
  }, []);

  console.log('AddADietEntry props.route.params:', props.route.params);


  /* below are code for the dietName text input */
  const [dietName, setDietName] = useState(props.route.params.data?props.route.params.data.dietName:"");
  const [dietNameText, setDietNameText] = useState(props.route.params.data?props.route.params.data.dietName:"");
  
  const handledietNameChange = (dietNameText) => {
    //console.log('dietNameText', dietNameText);
    if(dietNameText.length>0){
      setDietName(dietNameText);
    }
    else{
      alert('Please enter a name for the diet');
    }
  }

  /* below are code for the calories text input */
  const [calories, setCalories] = useState(props.route.params.data?props.route.params.data.calories:0);
  const [caloriesText, setCaloriesText] = useState(props.route.params.data?props.route.params.data.calories.toString():"");
  
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
      
      if(!props.route.params.data){ // this is a new diet
      // if the diet is special, save it with a field 'special' set to true
      if(calories>500){
        special = true;
      }
      else{
        special = false;
      }

      console.log('diet added:' ,dietName, calories,date,special);
      writeToDB({dietName,calories,date,special},'diets');
      props.navigation.goBack();
    }
    else{
      // this is an edit to existing diet

      Alert.alert(
        // Title
        'Important',
        // Message
        'Are you sure you want save these changes?',
        [
          // Array of buttons
          {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'YES', onPress: () => {
            // console.log('OK Pressed'); 
            // console.log('delete diet',props.route.params.data.id);
            updateDB(props.route.params.data.id, 'diets',{dietName, calories, date, special:(props.route.params.data.special &&isChecked)?false:props.route.params.data.special});
            props.navigation.goBack();}},
        ]
      );
      
     
    }
  }
}

  const handleCancel = () => {
    console.log('cancel button pressed');
    props.navigation.goBack();
  }

  return (
    <View style={theme==='light'?styles.addEntryContainer:styles.addEntryContainerDark}>
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

export default AddADietEntry
