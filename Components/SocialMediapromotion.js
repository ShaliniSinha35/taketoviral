import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList, Pressable, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
const width = Dimensions.get('screen').width;

const SocialMediapromotion = ({navigation}) => {

  const profiles = [
    {
      id: 0,
      img: require("../assets/instapage.jpg"),
    },

    {
      id: 1,
      img: require("../assets/instapage.jpg"),
    },
    {
      id: 2,
      img: require("../assets/instapage.jpg"),
    },
    {
      id: 3,
      img: require("../assets/instapage.jpg"),
    },
    {
      id: 4,
      img: require("../assets/instapage.jpg"),
    },
    {
      id: 5,
      img: require("../assets/instapage.jpg"),
    },

  ]


  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* YouTube Thumbnail */}
      <TouchableOpacity onPress={()=>navigation.navigate("singleSocial")}>
        <Image
          source={item.img}
          style={styles.thumbnail}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/image/5.png")} style={styles.section}>
      <View style={{ flexDirection: "row", width: width, justifyContent: "space-between", alignItems: "center" }}>
        <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 15, }}>
          <Image source={require("../assets/image/i.png")} style={{ height: 50, width: 30, resizeMode: "contain" }}></Image>
          <Text allowFontScaling={false} style={styles.sectionTitle}>SOCIAL MEDIA PAGE PROMOTION</Text>

        </View>

        <Pressable onPress={()=>navigation.navigate("socialPromotion")} style={{ paddingRight: 25 }}>
          <Text allowFontScaling={false} style={{ fontWeight: "bold", letterSpacing: 0.5, fontSize: 12 }}>View all</Text>
        </Pressable>
      </View>


      {/* <View style={styles.row}>
        {/* YouTube Players */}
      <FlatList
        scrollEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        data={profiles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
      {/* </View> */}

    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  section: {
    paddingTop: 5,
    resizeMode: "contain",
    paddingBottom: 10,


  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 13,
    letterSpacing: 1,
    marginLeft: 5,
  },
  row: {
    flexDirection: "row",
  },
  list: {
    paddingTop: 10,
    paddingLeft: 5
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 17,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 2,
    width: 160,
    marginRight: 2,
    borderColor: "#892784",
    borderWidth: 2.5,

  },
  iconContainer: {
    marginBottom: 10,
  },
  thumbnail: {
    width: "100%",
    height: 180,
    borderRadius: 15,
    // marginBottom: 10,
    // resizeMode:"cover"
  },
  Title: {
    fontWeight: 'bold',
    fontSize: 10,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: "#dd1155"
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: "#dd1155"
  },
  about: {
    fontSize: 8,
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing: 0.5
  },
  button: {
    backgroundColor: '#dd1155',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 10,
  },
})
export default SocialMediapromotion