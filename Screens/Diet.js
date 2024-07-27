import React from 'react'
import { Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useState } from 'react'
import { FlatList } from  'react-native'
import ItemsList from '../Components/ItemsList.js'
import styles from '../styleHelper.js'
import { useContext } from 'react';
import { ThemeContext } from '../Components/ThemeContext.js';
import { collection, onSnapshot } from 'firebase/firestore';
import { useEffect } from 'react'
import { database } from '../Firebase/firebaseSetup.js';


function Diet(props) {

  const { theme, toggleTheme } = useContext(ThemeContext);

  const [diets, setDiets] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(database, "diets"), (querySnapshot) => {
      const diet = [];
      querySnapshot.forEach((doc) => {
        diet.push({...doc.data(), id: doc.id}); //spread it and add id(key-value)
      });
      setDiets(diet);
    })
    return () => {
      unsubscribe();
    };
  }, [])

  

  
    return (
      <SafeAreaView style={theme==='light'?styles.itemContainer:styles.itemContainerDark}>
        <ItemsList type="diet" data={diets} navigation={props.navigation} route={props.route}/>
      </SafeAreaView>
    );
}

export default Diet
