import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React,{useState, useEffect} from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
import MaskedView from '@react-native-community/masked-view'
import { Audio } from 'expo-av';
const width = Dimensions.get('screen').width
const AudioPromotion = ({ navigation }) => {

  const tasks = [
    {
      id: 0,
      name: 'Lorem Ipsum',
      image: require("../assets/audio.png"),
      designation:"Business",
      about:"Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"

    },
    {
      id: 1,
      name: 'Lorem Ipsum',
      image: require("../assets/audio.png"),
      designation:"Business",
      about:"Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"


    },

    {
      id: 2,
      name: 'Lorem Ipsum',
      image: require("../assets/audio.png"),
      designation:"Business",
      about:"Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"


    },


  ]

  const [sound, setSound] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = async () => {
    try {
      console.log('Loading Sound');
      const { sound } = await Audio.Sound.createAsync(
        { uri: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' }
      );
      setSound(sound);

      console.log('Playing Sound');
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error('Error playing sound:', error);
    }
  };

  const stopSound = async () => {
    if (sound) {
      console.log('Stopping Sound');
      await sound.stopAsync();
      setIsPlaying(false);
    }
  };

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }} imageStyle={{ resizeMode: "cover" }}>
      <Header navigation={navigation}></Header>
      <View style={{ width: width, alignItems: 'center', }}>
        <Text
          allowFontScaling={false}
          style={{ fontWeight: 200, letterSpacing: 1, fontSize: 12, marginTop: 5 }}
        >Audio Promotion</Text>

      </View>

      <ScrollView>

      <View style={{ paddingHorizontal: 15, marginTop: 15 }}>
        {tasks.map((item) => (
          <LinearGradient
            key={item.id}
            colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBorder}
          >
            <View style={{ paddingVertical: 8, borderRadius: 10, backgroundColor: "#fff",paddingHorizontal:0 }}>
              <View style={{ padding: 8, flexDirection: "column", alignItems: "center" }}>
               
                  <Image source={item.image} style={{ height: 160, width: 280, resizeMode: "contain" }}></Image>
                 
                  <Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>

                <View style={{  }}>
                <MaskedView
        maskElement={<Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,textAlign:"center" }}>Song name: {item.name}</Text>}
      >
        <LinearGradient colors={['#FF1493', '#8A2BE2', '#FF1493', '#8A2BE2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,textAlign:"center",opacity:0 }}>Song name: {item.name}</Text>
        </LinearGradient>
      </MaskedView>
                  {/* <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,textAlign:"center" }}>Song name: {item.name}</Text> */}
                  {/* <Text numberOfLines={2} style={{ letterSpacing: 1 }}>Designation: {item.designation}</Text> */}
                  <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,fontSize:10,marginTop:5 }}>Description: {item.about}</Text>

                </View>

                <Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>
               
               {/* social links */}

               <View style={{width:"100%"}}>
                <Text allowFontScaling={false} style={{fontSize:10,marginLeft:8}}>Social Links:</Text>
                <View style={{flexDirection:"row",margin:8,gap:10}}>
    <TouchableOpacity>   
         <Image style={{height:30,width:30,resizeMode:"contain"}} source={require("../assets/mo/cy.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity>   
         <Image style={{height:30,width:30,resizeMode:"contain"}} source={require("../assets/mo/cf.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity>   
         <Image style={{height:30,width:30,resizeMode:"contain"}} source={require("../assets/mo/ci.png")}></Image>
    </TouchableOpacity>
    <TouchableOpacity>   
         <Image style={{height:30,width:30,resizeMode:"contain"}} source={require("../assets/mo/ct.png")}></Image>
    </TouchableOpacity>


</View>
                  
               </View>
               <Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>

               <View style={{ alignItems: "center", gap: 5 }}>
                  <LinearGradient
                    colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.buttonBorder}
                  >
                    <TouchableOpacity   onPress={isPlaying ? stopSound : playSound} style={styles.button}>


<Text allowFontScaling={false} style={{ color: '#fff', letterSpacing: 1, fontWeight: "bold", fontSize: 15 }}>{isPlaying?"Pause":"Play"}</Text>
</TouchableOpacity>
                  </LinearGradient>
                </View>
               
                

              </View>
            </View>
          </LinearGradient>

        ))}

      </View>
      </ScrollView>





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
    width:80,
    marginTop:5


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

export default AudioPromotion






