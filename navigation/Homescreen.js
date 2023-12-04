import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ScreenHeader from '../navigation/ScreenHeader';
import GetList from '../GetList';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import ImageList from '../navigation/ImageList';

const HomeScreen = () => {
  return (
    <View>
      <ScreenHeader mainTitle="Find Your" secondTitle="Best Near UGM Photocopy Shop" />
      <ImageList list={ImageList}/>
      <Text style={styles.subtitle}>Daftar Tempat Fotocopy</Text>
      <View>
         <GetList />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subtitle: {
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'left',
   marginTop: 15,
   marginBottom: 5,
   paddingLeft: 20,
   color: Colors.lightblue
},
subtitle2: {
   fontSize: 20,
   fontWeight: 'bold',
   textAlign: 'left',
   paddingLeft: 20,
   color: 'red'
},
});

export default HomeScreen;