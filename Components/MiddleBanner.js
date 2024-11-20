import { View, Text,Image,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import Carousel from 'react-native-reanimated-carousel'

const width= Dimensions.get('screen').width

 
const MiddleBanner = () => {
  return (
    <View>

    <View style={{backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderTopWidth: 4,
        // height:5,
        borderColor: "#CB1C64",
       }}></View>
    <View style={{ height:width /2.9,alignItems:"center",backgroundColor:"#fff",padding:15 }}>
    <Carousel
      loop
      width={width}
      height={width / 1}
      autoPlay={true}
      data={[...new Array(6).keys()]}
      scrollAnimationDuration={1000}
      renderItem={({ index }) => (
        <Image source={require("../assets/b4.jpg")} style={styles.banner} />
      )}
    />
  </View>

<View style={{backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 4,
    borderColor: "#CB1C64",}}></View>

</View>

  )
}

const styles= StyleSheet.create({
    banner: {
        height: 100,
        width: "100%",
        resizeMode: "contain",
        shadowOffset: { width: 0.2, height: 0.2 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowColor: "black",
        borderRadius:25
      },
})

export default MiddleBanner