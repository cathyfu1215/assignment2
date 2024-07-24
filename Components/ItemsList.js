import React from 'react'
import { Text, FlatList,SafeAreaView,View } from 'react-native'
import styles from '../styleHelper';
import { FontAwesome } from '@expo/vector-icons';
import PressableListItem from './PressableListItem';


function ItemsList({type, data,navigation, route}) {

  function ItemLine({item}) {

    function handlePressActivityItem() {
      navigation.navigate('Edit', {type: 'activity', data: item});
    }

    function handlePressDietItem() {
      navigation.navigate('Edit', {type: 'diet', data: item});
    }

    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };


    if (type === "activity") {
    return (
      <View style={styles.itemlistline}>
        <PressableListItem text={item.activityName} special={item.special} date={item.date} duration={item.duration} pressedFunction={handlePressActivityItem}>
        <Text style={{margin:5,fontWeight:'bold'}}>{item.activityName}</Text>
        <Text style={{margin:5}}>{item.special?<FontAwesome name="exclamation-triangle" size={24} color="black" />:"___"}</Text>
        <Text style={{margin:5, backgroundColor:'white',padding:3}}>{item.date.toDate().toLocaleDateString('en-US', options)}</Text>
        <Text style={{margin:5, backgroundColor:'white', padding:3}}>{item.duration} min </Text>
        </PressableListItem>
        </View>
    )} else {
      return (
        <View style={styles.itemlistline}>
          <PressableListItem text={item.dietName} special={item.special} date={item.date} calories={item.calories} pressedFunction={handlePressDietItem}>
          <Text style={{margin:5,fontWeight:'bold'}}>{item.dietName}</Text>
          <Text style={{margin:5}}>{item.special?<FontAwesome name="exclamation-triangle" size={24} color="black" />:"___"}</Text>
          <Text style={{margin:5, backgroundColor:'white',padding:3}}>{item.date.toDate().toLocaleDateString('en-US', options)}</Text>
          <Text style={{margin:5, backgroundColor:'white', padding:3}}>{item.calories}</Text>
          </PressableListItem>
          </View>
      )}
  }

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <ItemLine item={item} />  }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


export default ItemsList