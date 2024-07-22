import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FlatList } from  'react-native'
import ItemsList from '../Components/ItemsList.js'
import styles from '../styleHelper.js'

function Diet(props) {
  //I put some examples in the state so the testing is easier
  const [diets, setDiets] = useState([{id:1, text:"Breakfast", calories: 1000, date:"Fri 2024-07-19"},
    {id:2, text:"Lunch", calories: 700, date:"Sat 2024-07-20"}
  ]);
  
    const renderItem = (items) => {
      return <ItemsList items={items} route={props.route} />;
    };
  
    return (
      <SafeAreaView style={styles.itemContainer}>
        <ItemsList type="diet" data={diets} navigation={props.navigation} route={props.route}/>
      </SafeAreaView>
    );
}

export default Diet
