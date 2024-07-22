import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import ItemsList from '../Components/ItemsList.js'
import styles from '../styleHelper.js'

function Activities(props) {
    // I put some examples in the state so the testing is easier

    console.log('props in activities page',props);
    const [activities, setActivities] = useState([{id:1, text:"Running", duration:65, date:"Fri 2024-07-19"},
      {id:2, text:"Weights", duration:90, date:"Sat 2024-07-20"},
      {id:3, text:"Yoga", duration:45, date:"Sun 2024-07-21"},
    ]);
  
    const renderItem = (items) => {
      return <ItemsList items={items} route={props.route} />;
    };
  
    return (
      <SafeAreaView style={styles.itemContainer}>
        <ItemsList type="activity" data={activities} navigation={props.navigation} route={props.route}/>
      </SafeAreaView>
    );
}
export default Activities;
