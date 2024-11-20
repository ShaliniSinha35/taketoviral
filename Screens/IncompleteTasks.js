import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
const width = Dimensions.get('screen').width
const IncompleteTasks = ({ navigation }) => {

  const tasks = [
    {
      id: 0,
      title: 'Unlocking the Future: The Evolution of Video Tech',
      image: require("../assets/mo/cy.png")

    },
    {
      id: 1,
      title: 'Unlocking the Future: The Evolution of Video Tech',
      image: require("../assets/mo/cf.png")

    },

    {
      id: 2,
      title: 'Unlocking the Future: The Evolution of Video Tech',
      image: require("../assets/voice.png")

    },


  ]
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }} imageStyle={{ resizeMode: "cover" }}>
      <Header navigation={navigation}></Header>
      <View style={{ width: width, alignItems: 'center', }}>
        <Text
          allowFontScaling={false}
          style={{ fontWeight: 200, letterSpacing: 1, fontSize: 12, marginTop: 5 }}
        >Incomplete Tasks</Text>

      </View>

      <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
        {tasks.map((item) => (
          <LinearGradient
            key={item.id}
            colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBorder}
          >
            <View style={{ paddingVertical: 10, borderRadius: 10, backgroundColor: "#fff" }}>
              <View style={{ padding: 8, flexDirection: "row", alignItems: "center" }}>
                <LinearGradient
                  colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                  start={[0, 0]}
                  end={[1, 1]}
                  style={styles.imageBorder}
                >
                  <Image source={require("../assets/4.png")} style={{ height: 80, width: 80, resizeMode: "contain" }}></Image>
                </LinearGradient>
                <View style={{ width: 160 }}>
                  <Text numberOfLines={5} style={{ letterSpacing: 1 }}>Unlocking the Future: The Evolution of Video Tech</Text>
                </View>
                <View style={{ alignItems: "center", gap: 5 }}>
                  <Image source={item.image} style={{ height: 30, width: 30, resizeMode: "contain" }}></Image>
                  <LinearGradient
                    colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.buttonBorder}
                  >
                    <TouchableOpacity style={styles.button}>


                      <Text allowFontScaling={false} style={{ color: '#fff', letterSpacing: 1, fontWeight: "bold", fontSize: 10 }}>Watch now</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>

              </View>
            </View>
          </LinearGradient>

        ))}

      </View>



    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10
  },
  buttonBorder: {
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,


  },
  imageBorder: {
    // padding: 2,
    margin: 2,


  },

  button: {
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 5,
    paddingVertical: 5
  },
})

export default IncompleteTasks
// import React, { useState } from 'react';
// import { Button, View, Text } from 'react-native';
// import { Audio } from 'expo-av';

// const IncompleteTasks = () => {
//   const [sound, setSound] = useState();
//   const [isPlaying, setIsPlaying] = useState(false);

//   const playSound = async () => {
//     try {
//       console.log('Loading Sound');
//       const { sound } = await Audio.Sound.createAsync(
//         { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
//       );
//       setSound(sound);

//       console.log('Playing Sound');
//       await sound.playAsync();
//       setIsPlaying(true);
//     } catch (error) {
//       console.error('Error playing sound:', error);
//     }
//   };

//   const stopSound = async () => {
//     if (sound) {
//       console.log('Stopping Sound');
//       await sound.stopAsync();
//       setIsPlaying(false);
//     }
//   };

//   React.useEffect(() => {
//     return sound
//       ? () => {
//           console.log('Unloading Sound');
//           sound.unloadAsync();
//         }
//       : undefined;
//   }, [sound]);

//   return (
//     <View style={{ marginTop: 50, alignItems: 'center' }}>
//       {/* <Text>Audio Player</Text>
//       <Button
//         title={isPlaying ? 'Stop' : 'Play'}
//         onPress={isPlaying ? stopSound : playSound}
//       /> */}
//             <Text style={{textAlign:"center"}}>Incomplete Task</Text>

//     </View>
//   );
// };






