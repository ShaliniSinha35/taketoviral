import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList,Pressable, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
const width = Dimensions.get('screen').width;

const ImagePromotion = ({navigation}) => {

    const profiles=[
        {
            id:0,
            img:require("../assets/profile.jpg"),
            name:"Name",
            designation:"Designation",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id:1,
            img:require("../assets/profile.jpg"),
            name:"Name",
            designation:"Designation",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."   },
        {
            id:2,
            img:require("../assets/profile.jpg"),
            name:"Name",
            designation:"Designation",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."      },
        {
            id:3,
            img:require("../assets/profile.jpg"),
            name:"Name",
            designation:"Designation",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."        },
        {
            id:4,
            img:require("../assets/profile.jpg"),
            name:"Name",
            designation:"Designation",
            about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."      },

    ]


    const renderItem = ({ item }) => (
        <View style={styles.card}>
          {/* YouTube Icon */}
          {/* <View style={styles.iconContainer}>
            <MaterialIcons name="video-library" size={30} color="#FF0000" />
          </View> */}
    
          {/* YouTube Thumbnail */}
          <TouchableOpacity>
            <Image
              source={item.img}
              style={styles.thumbnail}
            />
          </TouchableOpacity>


        
    
          {/* Video Title */}
          <Text allowFontScaling={false} style={styles.Title}>{item.name}</Text>
          <Text allowFontScaling={false} style={styles.subTitle}>{item.designation}</Text>


          <Text allowFontScaling={false} numberOfLines={2} style={styles.about}>{item.about}</Text>


    
       
        </View>
      );
    
  return (
    <ImageBackground source={require("../assets/image/7.png")} style={styles.section}>
  <View style={{flexDirection:"row",width:width,justifyContent:"space-between",alignItems:"center"}}>

  <View style={{flexDirection:"row",alignItems:"center", marginLeft: 15,}}>
  <Image source={require("../assets/image/iv.png")} style={{height:50,width:30,resizeMode:"contain"}}></Image>
  <Text allowFontScaling={false} style={styles.sectionTitle}>Image Promotion</Text>
      {/* <MaskedView
        maskElement={<Text style={styles.sectionTitle}>Image Promotion</Text>}
      >
        <LinearGradient colors={['#FF1493', '#8A2BE2', '#FF1493', '#8A2BE2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={[styles.sectionTitle, { opacity: 0 }]}>Image Promotion</Text>
        </LinearGradient>
      </MaskedView> */}
</View>
      <Pressable onPress={()=>navigation.navigate("imagePromotion")}  style={{paddingRight:25}}>
        <Text allowFontScaling={false} style={{fontWeight:"bold",letterSpacing:0.5,fontSize:12}}>View all</Text>
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

const styles= StyleSheet.create({
    section: {
        // paddingTop: 5,
        // resizeMode:"contain",
        // paddingBottom:10,
        // height:400
        // marginBottom:20
        
      },
      sectionTitle: {
        fontWeight: "800",
        fontSize: 15,
        letterSpacing: 1,
        marginLeft: 10,
      },
      row: {
        flexDirection: "row",
      },
      list: {
        paddingTop: 15,
        paddingLeft:5
      },
      card: {
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 5,
        marginBottom: 20,
        // padding: 10,
        alignItems: 'center',
        width: 120,
        marginRight: 5,
        paddingBottom:5,
        borderColor:"#892784",
        borderWidth:2
      },
      iconContainer: {
        marginBottom: 10,
      },
      thumbnail: {
        width: 107,
        height: 80,
        borderRadius: 8,
        // marginBottom: 10,
        resizeMode:"contain"
      },
      Title: {
        fontWeight: 'bold',
        fontSize: 10,
        textAlign: 'center',
        letterSpacing:0.5,
        color:"#dd1155"
      },
      subTitle: {
        fontWeight: 'bold',
        fontSize: 10,
        marginBottom: 5,
        textAlign: 'center',
        letterSpacing:0.5,
        color:"#dd1155"
      },
      about: {
        fontSize: 8,
        marginBottom: 5,
        textAlign: 'center',
        letterSpacing:0.5
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
export default ImagePromotion