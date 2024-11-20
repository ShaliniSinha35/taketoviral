import { View, Text } from 'react-native'
import React from 'react'
import Header from '../Components/Header'

const Profile = ({navigation}) => {
  return (
    <View style={{flex:1,backgroundColor:"#fff"}}>
    <Header navigation={navigation}></Header>
    <Text style={{textAlign:"center",marginTop:20}}>Profile</Text>
  </View>
  )
}

export default Profile