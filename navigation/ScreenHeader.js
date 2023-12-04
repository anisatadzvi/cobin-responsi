import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const ScreenHeader = ({mainTitle, secondTitle}) => {
  return (
   <View style={styles.container}>
   <Text style={styles.mainTitle}>{mainTitle}</Text>
   <Text style={styles.secondTitle}>{secondTitle}</Text>
 </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  mainTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: Colors.black
  },
  secondTitle: {
    fontSize: 25,
    paddingBottom: 5
  },
});

export default ScreenHeader;