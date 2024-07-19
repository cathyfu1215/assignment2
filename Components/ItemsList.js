import React from 'react'
import { Text, FlatList,SafeAreaView } from 'react-native'


function ItemsList({type, data}) {
  console.log('type from a page:', type);
  console.log('data from a page:', data);
  return (
    <SafeAreaView>
      <Text>{type}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={{fontSize:15}}>{item.id}:{item.text}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


export default ItemsList