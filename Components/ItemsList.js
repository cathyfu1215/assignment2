import React from 'react'
import { Text, FlatList,SafeAreaView,View } from 'react-native'
import styles from '../styleHelper';
import { FontAwesome } from '@expo/vector-icons';
import PressableListItem from './PressableListItem';


function ItemsList({type, data,navigation, route}) {
  // console.log('type from a page:', type);
  // console.log('data from a page:', data);

  function ItemLine({item}) {

    function handlePressActivityItem() {
      console.log('activity item pressed');
      console.log('item:', item);
      navigation.navigate('Edit', {type: 'activity', data: item});
    }

    function handlePressDietItem() {
      console.log('diet item pressed');
      console.log('item:', item);
      navigation.navigate('Edit', {type: 'diet', data: item});
    }

    // item.special = false;
    // if(type==="activity" && (item.text ==="Running"||"Weights") && item.duration>60){
    //   item.special = true;
    // }
    // if(type==="diet"&& item.calories>800){
    //   item.special = true;
    // }

    if (type === "activity") {
    return (
      <View style={styles.itemlistline}>
        <PressableListItem text={item.activityName} special={item.special} date={item.dateString} duration={item.duration} pressedFunction={handlePressActivityItem}>
        <Text style={{margin:5,fontWeight:'bold'}}>{item.activityName}</Text>
        <Text style={{margin:5}}>{item.special?<FontAwesome name="exclamation-triangle" size={24} color="black" />:"      "}</Text>
        <Text style={{margin:5, backgroundColor:'white',padding:3}}>{item.dateString}</Text>
        <Text style={{margin:5, backgroundColor:'white', padding:3}}>{item.duration} min </Text>
        </PressableListItem>
        </View>
    )} else {
      return (
        <View style={styles.itemlistline}>
          <PressableListItem text={item.dietName} special={item.special} date={item.dateString} calories={item.calories} pressedFunction={handlePressDietItem}>
          <Text style={{margin:5,fontWeight:'bold'}}>{item.dietName}</Text>
          <Text style={{margin:5}}>{item.special?<FontAwesome name="exclamation-triangle" size={24} color="black" />:" "}</Text>
          <Text style={{margin:5, backgroundColor:'white',padding:3}}>{item.dateString}</Text>
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