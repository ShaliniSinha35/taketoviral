import { View, Text, StyleSheet, Image, ImageBackground, Dimensions, ScrollView,SafeAreaView } from 'react-native';
import React from 'react';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Section1 from '../Components/Section1';
import Section3 from '../Components/Section3';
import Carousel from 'react-native-reanimated-carousel';
import AudioPromotion from '../Components/AudioPromotion';
import MiddleBanner from '../Components/MiddleBanner';
import ImagePromotion from '../Components/ImagePromotion';
import SocialMediapromotion from '../Components/SocialMediapromotion';
import Header from '../Components/Header';


const width = Dimensions.get('screen').width;

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}></Header>
      <ScrollView>

        {/* Banner Section */}
        <View style={{ height: 109, alignItems: "center", padding: 10 }}>
          <Carousel
            loop
            width={width}
            height={width / 3}
            autoPlay={true}
            data={[...new Array(6).keys()]}
            scrollAnimationDuration={1000}
            renderItem={({ index }) => (
              <Image source={require("../assets/b1.jpg")} style={styles.banner} />
            )}
          />
        </View>

        {/* Sections */}
        <Section1 navigation={navigation} />
        <Section3 navigation={navigation} />
        <AudioPromotion navigation={navigation}></AudioPromotion>
        <MiddleBanner navigation={navigation}></MiddleBanner>
        <SocialMediapromotion navigation={navigation}></SocialMediapromotion>
        <ImagePromotion navigation={navigation}></ImagePromotion>




      </ScrollView>
    </SafeAreaView>
  );
};

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
    paddingHorizontal: 10
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
  banner: {
    height: 100,
    width: width,
    resizeMode: "contain",
    shadowOffset: { width: 0.2, height: 0.2 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    shadowColor: "black",
  },
  heading: {
    fontWeight: "800",
    textAlign: "center",
    letterSpacing: 2,
    fontSize: 20,
  },
  subHeading: {
    letterSpacing: 0.5,
    fontSize: 10,
    textAlign: "center",
    fontWeight: "700",
  },
});

export default Home;
