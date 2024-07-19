import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FlatList } from  'react-native'
import ItemsList from '../Components/ItemsList.js'
import styles from '../styleHelper.js'

function Diet() {
  const [diets, setDiets] = useState([{id:1, text:"diet1"}, {id:2, text:"diet2"}]);
  
    const renderItem = (items) => {
      return <ItemsList items={items} route={props.route} />;
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <ItemsList type="diet" data={diets}/>
      </SafeAreaView>
    );
}

export default Diet
