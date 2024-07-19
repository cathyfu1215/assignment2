import React from 'react'
import { Text, FlatList,SafeAreaView } from 'react-native'


function ItemsList({data}) {
  console.log('data from a page:', data);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={{fontSize:15}}>{item.id}:{item.text}</Text>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


export default ItemsList