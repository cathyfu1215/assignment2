import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import ItemsList from '../Components/ItemsList.js'
import styles from '../styleHelper.js'
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react'
import { database } from '../Firebase/firebaseSetup.js';


function Activities(props) {
    // I put some examples in the state so the testing is easier

    const { theme, toggleTheme } = useContext(ThemeContext);

    console.log('props in activities page',props);
    const [activities, setActivities] = useState([]);

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(database, "activities"), (querySnapshot) => {
        const act = [];
        querySnapshot.forEach((doc) => {
          act.push({...doc.data(), id: doc.id}); //spread it and add id(key-value)
        });
        setActivities(act);
      })
      return () => {
        unsubscribe();
      };
    }, [])
  
    return (
      <SafeAreaView style={theme==='light'?styles.itemContainer:styles.itemContainerDark}>
        <ItemsList type="activity" data={activities} navigation={props.navigation} route={props.route}/>
      </SafeAreaView>
    );
}
export default Activities;
