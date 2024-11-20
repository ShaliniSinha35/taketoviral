import { View, Text,ImageBackground, Dimensions, StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { LinearGradient } from 'expo-linear-gradient'
const width= Dimensions.get('screen').width
const Share = ({navigation}) => {
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{flex:1,}} imageStyle={{resizeMode:"cover"}}>
    <Header navigation={navigation}></Header>
    {/* <Text style={{textAlign:"center",marginTop:20}}>Share </Text> */}

    <View style={{alignItems:"center",width:width,marginTop:20}}>
    <LinearGradient
      colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.gradientBorder}
    >
      <TouchableOpacity style={styles.button}>
        <Text  allowFontScaling={false} style={{ color: '#fff', letterSpacing: 1,fontWeight:"bold",fontSize:12 }}>Share now</Text>
      </TouchableOpacity>
    </LinearGradient>
    </View>
  </ImageBackground>
  )
}


const styles= StyleSheet.create({
  gradientBorder: {
    borderRadius: 10,
    margin: 10,
    padding: 3, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    
   
  },
  button:{
    alignItems:"center",
    justifyContent:"center",
    paddingVertical:10,
    paddingHorizontal:20
  }
})
export default Share