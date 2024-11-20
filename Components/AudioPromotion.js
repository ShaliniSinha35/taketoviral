import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList,Pressable, ImageBackground } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
const width = Dimensions.get('screen').width;

const AudioPromotion = () => {

    const audios=[
        {
            id:0,
            img:require("../assets/audio.png"),
            title:"Audio 1"
        },
        {
            id:1,
            img:require("../assets/audio.png"),
            title:"Audio 2"
        },
        {
            id:2,
            img:require("../assets/audio.png"),
            title:"Audio 3"
        },
        {
            id:3,
            img:require("../assets/audio.png"),
            title:"Audio 4"
        },
        {
            id:4,
            img:require("../assets/audio.png"),
            title:"Audio 5"
        },

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


          <View>
            <Image source={require("../assets/voice.png")} style={{height:20,width:20,marginTop:-15}}></Image>
          </View>
    
          {/* Video Title */}
          <Text allowFontScaling={false} style={styles.videoTitle}>{item.title}</Text>
    
          {/* Watch Now Button */}
          <TouchableOpacity  style={styles.button}>
            <Text allowFontScaling={false} style={styles.buttonText}>Listen Now</Text>
          </TouchableOpacity>
        </View>
      );
    
  return (
    <ImageBackground source={require("../assets/image/4.png")} style={styles.section}>
  <View style={{flexDirection:"row",width:width,justifyContent:"space-between",alignItems:"center"}}>

    <View style={{flexDirection:"row",alignItems:"center", marginLeft: 15,}}>
    <Image source={require("../assets/image/v.png")} style={{height:50,width:30,resizeMode:"contain"}}></Image>
    <Text allowFontScaling={false} style={styles.sectionTitle}>Audio Promotion</Text>
    {/* <MaskedView
        maskElement={<Text style={styles.sectionTitle}>Audio Promotion</Text>}
      >
        <LinearGradient colors={['#FF1493', '#8A2BE2', '#FF1493', '#8A2BE2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text style={[styles.sectionTitle, { opacity: 0 }]}>Audio Promotion</Text>
        </LinearGradient>
      </MaskedView> */}
    </View>
    

      <Pressable  style={{paddingRight:25}}>
        <Text allowFontScaling={false} style={{fontWeight:"bold",letterSpacing:0.5,fontSize:12}}>View all</Text>
      </Pressable>
      </View>


      <View style={styles.row}>
        {/* YouTube Players */}
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={audios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>

    </ImageBackground>
  )
}

const styles= StyleSheet.create({
    section: {
        paddingEndTop: 20,
        // padding: 10,
        resizeMode:"contain",
        paddingBottom:5
        
      },
      sectionTitle: {
        fontWeight: "800",
        fontSize: 15,
        letterSpacing: 1,
        marginLeft:5
     

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
        width: 115,
        marginRight: 5,
        paddingBottom:5,
        borderColor:"#892784",
        borderWidth:2
      },
      iconContainer: {
        marginBottom: 10,
      },
      thumbnail: {
        width: 105,
        height: 80,
        borderRadius: 8,
        // marginBottom: 10,
        resizeMode:"contain"
      },
      videoTitle: {
        fontWeight: 'bold',
        fontSize: 12,
        marginBottom: 5,
        textAlign: 'center',
        letterSpacing:0.5
      },
      button: {
        backgroundColor: '#CB1C64',
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
export default AudioPromotion