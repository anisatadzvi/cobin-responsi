import React from 'react'
import {View, Image, FlatList} from 'react-native';

const ImageList = () => {

  // Data Image
  const ImageData = [
    {
      id: "01",
      image: require("../assets/image/CoBin.png"),
    },
    {
      id: "02",
      image: require("../assets/image/ugm.jpg"),
    },
    {
      id: "03",
      image: require("../assets/image/mesin.jpg"),
    },
    {
      id: "04",
      image: require("../assets/image/hard.jpg"),
    },
    {
      id: "05",
      image: require("../assets/image/soft.jpg"),
    },
    {
      id: "06",
      image: require("../assets/image/spiral.jpg"),
    },
  ];

  //Display Image/UI

  const renderItem = ({ item, index }) => {
    return (
    <View style={{paddingHorizontal: 20,}}>
      <Image source={item.image} style={{height: 210, width: 365, borderRadius: 15}}/>
    </View>
    );
  };

    return (
      <View>
        <FlatList
        data={ImageData}
        renderItem={renderItem}
        horizontal={true}
        pagingEnabled={true}
        />
        <View 
        style={{
          flexDirection: 'row', 
          'justifyContent': 'center', 
          marginTop: "30",
        }}
          >
        </View>
      </View>
    );
  };

export default ImageList