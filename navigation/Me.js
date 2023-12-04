import React from 'react'
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'

const Me = () => {
  return (
    <ScrollView>
    <View style={{paddingHorizontal: 20, marginTop: 15}}>
      <Text style={styles.Title}>TENTANG COBIN</Text>
      <Image style={styles.Image} source={require('../assets/image/CoBin2.png')}/>
      <Text style={styles.card}>CoBin adalah aplikasi berbasis geospasial yang memberikan infromasi mengenai persebaran 
      tempat fotocopy dan jilid yang berada di sekitar UGM.</Text>
      <Text style={styles.card3}>CoBin membantu mahasiswa untuk mempermudah dalam menyelesaikan tugas mereka yang membutuhkan
      scan dokumen, print, dan jilid lembaran menjadi sebuah buku.</Text>
      <Text style={styles.card4}>CoBin juga membantu pelaku usaha percetakan fotocopy & jilid
      untuk mempublikasi toko mereka dengan fitur "Add Data" dengan memasukkan informasi mengenai nama toko, jam operasional, dan titik koordinat.</Text>
      <Text style={styles.Title}>Fitur CoBin</Text>
      <Text style={styles.card2}>CoBin memiliki beberapa fitur yaitu daftar tempat fotocopy & jilid (dilengkapi dengan informasi
      jam operasional dan alamat), peta titik lokasi tempat fotocopy & jilid beserta pop-up (nama tempat & jam operasional), 
      tambah data, portofolio developer, dan tentang aplikasi.</Text>
    </View>
    </ScrollView>
  )
}

export default Me
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.oren,
  },
  Title: {
    marginTop: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black'
  },
  Image: {
    marginTop: 20,
    marginBottom: 20,
    height: 200, 
    width: 200, 
    borderRadius: 15
  },
  card: {
    textAlign: "justify",
    color: "black",
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    backgroundColor: Colors.sage,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  card2: {
    textAlign: "justify",
    color: "black",
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    backgroundColor: Colors.cold,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  card3: {
    color: "black",
    textAlign: "justify",
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    backgroundColor: Colors.pink,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  card4: {
    color: "black",
    textAlign: "justify",
    flexDirection: 'row',
    padding: 20,
    borderRadius: 5,
    backgroundColor: Colors.yellow,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 5,
    marginVertical: 5,
  },
});