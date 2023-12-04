import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import Portofolio from '../App';
import { WebView } from 'react-native-webview';
import Homescreen from "../navigation/Homescreen";
import About from "../navigation/Me";

const Tab = createBottomTabNavigator();

// Form input dari github pages
const forminput = 'https://anisatadzvi.github.io/pgpbl-12/'

// Peta web dari github pages
const webmap = 'https://anisatadzvi.github.io/pgpbl-12/map.html'

function HomeScreen() {
   return (
      <View>
         <ImageBackground
         source={require('../assets/aurora.jpeg')}>
         <View>
            <Homescreen />
         </View>
         </ImageBackground>
      </View>
   );
}

function MapsScreen() {
   return (
         <WebView
        source={{ uri: webmap }}
      />
   );
}

function AddDataScreen() {
   return (
         <WebView
        source={{ uri: forminput }}
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

function MeScreen() {
   return (
      <View>
         <ImageBackground
         source={require('../assets/tema2.jpeg')}>
         <View>
            <About/>
         </View>
         </ImageBackground>
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
      <Tab.Screen name="Add Data" component={AddDataScreen} options={{
	tabBarLabel: 'Add Data',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="plus-circle" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="Profile" component={ProfileScreen} options={{
	tabBarLabel: 'Profile',
	tabBarIcon: ({ color, size }) => (
  		<Fontawesome5 name="cat" color={color} size={size} />
	),
}}
/>
<Tab.Screen name="About" component={MeScreen} options={{
	tabBarLabel: 'About',
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
   
   container: {
      marginBottom: 20,
      flexDirection: 'row',
      flexWrap: 'wrap'
   }

});