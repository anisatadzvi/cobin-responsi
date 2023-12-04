import React from 'react'
import ListStore from './data/ListStore.json'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const GetList = () => {
  return (
   <FlatList
   data={ListStore}
   renderItem={({ item }) => (
       <View style={ styles.card }>
         <View>
           <Text style={ styles.cardtitle }>{item.nama}</Text>
           <Text>Buka: {item.buka}</Text>
           <Text>Tutup: {item.tutup}</Text>
           <Text>Alamat: {item.alamat}</Text>
         </View>
       </View>
   )}
 />
  )
}

export default GetList

const styles = StyleSheet.create({
   title: {
     paddingVertical: 12,
     backgroundColor: '#333',
     color: 'white',
     fontSize: 20,
     fontWeight: 'bold',
     textAlign: 'center',
   },
   cardtitle: {
     fontSize: 20,
     fontWeight: 'bold',
     color: Colors.black
   },
   card: {
     flexDirection: 'row',
     padding: 20,
     borderRadius: 15,
     backgroundColor: Colors.sage,
     shadowColor: '#000',
     shadowOffset: {
       width: 1,
       height: 1,
     },
     shadowOpacity: 0.20,
     shadowRadius: 1.41,
     elevation: 2,
     marginHorizontal: 20,
     marginVertical: 10,
   },
  })
  