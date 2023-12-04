import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
const webmap = require('../peta/map.html')
import Getjsonfile from '../Getjsonfile';

const Tab = createBottomTabNavigator();

function HomeScreen() {
   return (
      <ScrollView>
         <Text style= { styles.title }>My Maps</Text>
         <View style={styles.lisstitems}>
            <Image source={require('../peta/peta2.png')} style={styles.image} />
            <Text style={ styles.caption }>Peta Geomorfologi Habitat Bentik</Text>
         </View>
         <View style={styles.lisstitems}>
            <Image source={require('../peta/peta.png')} style={styles.image} />
            <Text style={ styles.caption }>Peta Tutupan Lahan Mangrove</Text>
         </View>
         <View style={styles.lisstitems}>
            <Image source={require('../peta/peta3.jpg')} style={styles.image} />
            <Text style={ styles.caption }>Peta Perwilayahan DAS Tinalah</Text>
         </View>
         <View style={styles.lisstitems}>
            <Image source={require('../peta/peta4.png')} style={styles.image} />
            <Text style={ styles.caption }>Peta Kebakaran Lahan Kalimantan 2022</Text>
         </View>
      </ScrollView>
   );
}

function MapsScreen() {
   return (
         <WebView
        source={ webmap }
      />
   );
}

function ProfileScreen() {
   return (
      <View>
         <Portofolio />
      </View>
   );
}

function MahasiswaScreen() {
   return (
      <View>
         <Getjsonfile />
      </View>
   );
}

function MyTabs() {
  return (
   <NavigationContainer>
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
	tabBarLabel: 'Home',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="home" color={color} size={size} />
	),
}}
/>
      <Tab.Screen name="Maps" component={MapsScreen} options={{
	tabBarLabel: 'Maps',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="map-marked-alt" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="user" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Mahasiswa" component={MahasiswaScreen} options={{
	tabBarLabel: 'Mahasiswa',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="users" color={color} size={size} />
	),
}}
/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MyTabs;

const styles = StyleSheet.create({
   image: {
      width: 320,
      height: 220,
      resizeMode: 'stretch'
   },
   lisstitems: {
      padding: 10,
      alignItems: 'center',
   },
   caption: {
      fontSize: 15,
      fontWeight: 'bold',
   },
   title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 10
   }
});