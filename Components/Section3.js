import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList ,Pressable, ImageBackground} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'; // Install axios for API calls
import Icon from 'react-native-vector-icons/FontAwesome'; 

const width = Dimensions.get('screen').width;
const API_KEY = 'AIzaSyBlLKD5rjAt8LCvdc6ZUiFxvZLJw7ssf5E'; // Replace this with your API key

const Section3 = ({navigation}) => {
  const [youtubeVideos, setYoutubeVideos] = useState([
    { id: 0, videoId: "R9oy81eji48", subscribe: "https://www.youtube.com/@arideejay", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 1, videoId: "aCghEsTPhdA", subscribe: "https://www.youtube.com/@cgluca", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 2, videoId: "gUKAnQsz-Lo", subscribe: "https://www.youtube.com/@EpicScenery8K", views: 0, liked: false, watchDuration: 0, title: '' },
  ]);

  useEffect(() => {
    const fetchVideoTitles = async () => {
      const updatedVideos = await Promise.all(
        youtubeVideos.map(async (video) => {
          const videoDetails = await getVideoDetails(video.videoId);
          return { ...video, title: videoDetails.title };
        })
      );
      setYoutubeVideos(updatedVideos);
    };

    fetchVideoTitles();
  }, []);

  const getVideoDetails = async (videoId) => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`
      );
      const title = response.data.items[0].snippet.title;
      return { title };
    } catch (error) {
      console.error('Error fetching video details:', error);
      return { title: 'Title Not Available' };
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      {/* YouTube Icon */}
     

      {/* YouTube Thumbnail */}
      <TouchableOpacity>
        <Image
          source={{ uri: `https://img.youtube.com/vi/${item.videoId}/hqdefault.jpg` }}
          style={styles.thumbnail}
        />
      </TouchableOpacity>

      <View style={styles.iconContainer}>
                            {/* <Icon name="youtube-play" size={28} color="red" /> */}
<Image source={require("../assets/mo/cy.png")} style={{height:25,width:25,resizeMode:"contain"}}></Image>
        {/* <MaterialIcons name="video-library" size={30} color="#FF0000" /> */}
      </View>

      {/* Video Title */}
      <Text allowFontScaling={false} numberOfLines={2} style={styles.videoTitle}>{item.title}</Text>

      {/* Watch Now Button */}
      <TouchableOpacity onPress={()=>navigation.navigate("playVideo",{item:item})} style={styles.button}>
        <Text allowFontScaling={false} style={styles.buttonText}>Watch Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/image/3.png")} style={styles.section}>
      <View style={{flexDirection:"row",width:width,justifyContent:"space-between",alignItems:"center"}}>
      <MaskedView
        maskElement={<Text allowFontScaling={false} style={styles.sectionTitle}>Earn Now</Text>}
      >
        <LinearGradient colors={['#FF1493', '#8A2BE2', '#FF1493', '#8A2BE2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
          <Text allowFontScaling={false} style={[styles.sectionTitle, { opacity: 0 }]}>Earn Now</Text>
        </LinearGradient>
      </MaskedView>

{/* <Text style={styles.sectionTitle}>Earn Now</Text> */}
      <Pressable onPress={()=>navigation.navigate("youtube")} style={{paddingRight:25}}>
        <Text allowFontScaling={false} style={{fontWeight:"bold",letterSpacing:0.5,fontSize:12}}>View all</Text>
      </Pressable>
      </View>
    
      <View style={styles.row}>
        {/* YouTube Players */}
        <FlatList
          scrollEnabled
          showsHorizontalScrollIndicator={false}
          horizontal
          data={youtubeVideos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  section: {
    // marginTop: 10,
    paddingTop:10,
    gap:5

  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 1,
    marginLeft: 18,
  },
  row: {
    flexDirection: "row",
  },
  list: {
    paddingTop: 15,
    paddingHorizontal:10
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
    // padding: 8,
    alignItems: 'center',
    width: 160,
    marginRight: 10,
    paddingBottom:10
  },
  iconContainer: {
    // marginBottom: 10,
    position:"absolute",
    top:-5,
    left:0
    
  },
  thumbnail: {
    width: 160,
    height: 80,
    borderRadius: 8,
    marginBottom: 10,
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
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default Section3;
