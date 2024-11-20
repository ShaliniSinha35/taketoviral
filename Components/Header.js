import { View, Text,ImageBackground, StyleSheet,Image, Pressable } from 'react-native'
import React from 'react'
import { Ionicons,FontAwesome } from '@expo/vector-icons';


const Header = ({navigation}) => {
  return (
    <View>
     <ImageBackground source={require("../assets/mo/header.png")} style={styles.header}>
        <Ionicons onPress={() => navigation.openDrawer()} name="menu" size={32} color="#dd1155" />
      <Pressable onPress={()=>navigation.navigate("Home")}>
      <Image  style={styles.logo} source={require("../assets/logo.png")} />
        </Pressable> 
        <Pressable onPress={()=>navigation.navigate("profile")} style={{alignItems:"center"}}>
        <FontAwesome name="user-circle" size={28} color="#dd1155" />
        <Text allowFontScaling={false} style={{color:"#ff006e",fontWeight:"bold",fontSize:10}}>Shivani</Text>

        </Pressable>
      </ImageBackground>
    
          <View style={{backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 4,
    height:10,
    borderColor: "#CB1C64",}}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    alignItems: "center",
    backgroundColor: 'transparent',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    paddingHorizontal:10
  },
  logo: {
    height: 60,
    width: 60,
    resizeMode: "contain",
  },

});


export default Header