import { View, Text, StyleSheet, Dimensions, Image, FlatList, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Components/Header';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const width = Dimensions.get('screen').width;

const Dashboard = ({navigation}) => {
  const dashboards = [
    {
      id: 0,
      image: require('../assets/1.png'),
      title: 'Complete Tasks',
      value:"10"
    },
    {
      id: 1,
      image: require('../assets/2.png'),
      title: 'Pending Tasks',
      value:"100"
    },
    {
      id: 2,
      image: require('../assets/3.png'),
      title: 'Total Watch Duration',
      value:"10hrs"
    },
    {
      id: 3,
      image: require('../assets/4.png'),
      title: 'Total Earning',
      value:"Rs 10000"
    },
    {
      id: 4,
      image: require('../assets/5.png'),
      title: 'Total Likes',
      value:"5000+"
    },
  ];

  return (
    <ImageBackground source={require("../assets/bg.png")} imageStyle={{resizeMode:"cover"}} style={styles.container}>
      <Header navigation={navigation} />

      <View style={{ width: width, alignItems: 'center' }}>
        <Text
          allowFontScaling={false}
          style={{ fontWeight: 200, letterSpacing: 1, fontSize: 12,marginTop:5 }}
        >
          My Dashboard
        </Text>
      </View>

      <ScrollView>

      <View style={{ marginTop: 1, paddingHorizontal: 15, paddingVertical: 15 }}>
        <FlatList
          data={dashboards}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={({ item }) => (
            <LinearGradient
              colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
              start={[0, 0]}
              end={[1, 1]}
              style={styles.gradientBorder}
            >
              <View style={styles.contentBox}>
              <LinearGradient
                  colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={{ borderRadius: 10,
                    paddingHorizontal: 3,
                    paddingVertical: 3,
                  width:80,marginBottom:10}}
                >
                  <TouchableOpacity style={styles.button}>
                    <Text allowFontScaling={false} style={{ color: '#111', letterSpacing: 1,fontWeight:"bold",fontSize:10 }}>{item.value}</Text>
                  </TouchableOpacity>
                </LinearGradient>
                

                <Image
                  source={item.image}
                  style={{ height: 110, width: width * 0.32, resizeMode: 'contain' }}
                />

                <LinearGradient
                  colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.buttonBorder}
                >
                  <TouchableOpacity style={styles.button}>
                    <Text allowFontScaling={false} style={{ color: '#111', letterSpacing: 1,fontWeight:"bold",fontSize:10 }}>{item.title}</Text>
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </LinearGradient>
          )}
        />
      </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // paddingBottom: 100,
  },
  gradientBorder: {
    borderRadius: 10,
    margin: 10,
    padding: 3, 
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
   
  },
  contentBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff', // Matches the screen background
    borderRadius: 10,
    padding: 15,
    paddingVertical: 20 
  },
  buttonBorder: {
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,
    position: "absolute",
    bottom: -10,
    padding: 3

  },

  button: {

    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: "#fff",
    paddingHorizontal:5,
    paddingVertical:5
  },
});

export default Dashboard;
