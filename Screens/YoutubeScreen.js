import { View, Text, Dimensions, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList ,Pressable, ImageBackground} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Linking } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import MaskedView from '@react-native-community/masked-view';
import { MaterialIcons } from '@expo/vector-icons';
import axios from 'axios'; // Install axios for API calls
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Header from '../Components/Header';

const width = Dimensions.get('screen').width;
const API_KEY = 'AIzaSyBlLKD5rjAt8LCvdc6ZUiFxvZLJw7ssf5E'; // Replace this with your API key

const YoutubeScreen = ({navigation}) => {
  const [youtubeVideos, setYoutubeVideos] = useState([
    { id: 0, videoId: "R9oy81eji48", subscribe: "https://www.youtube.com/@arideejay", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 1, videoId: "aCghEsTPhdA", subscribe: "https://www.youtube.com/@cgluca", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 2, videoId: "gUKAnQsz-Lo", subscribe: "https://www.youtube.com/@EpicScenery8K", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 3, videoId: "R9oy81eji48", subscribe: "https://www.youtube.com/@arideejay", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 4, videoId: "aCghEsTPhdA", subscribe: "https://www.youtube.com/@cgluca", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 5, videoId: "aCghEsTPhdA", subscribe: "https://www.youtube.com/@cgluca", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 6, videoId: "R9oy81eji48", subscribe: "https://www.youtube.com/@arideejay", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 7, videoId: "aCghEsTPhdA", subscribe: "https://www.youtube.com/@cgluca", views: 0, liked: false, watchDuration: 0, title: '' },
    { id: 8, videoId: "gUKAnQsz-Lo", subscribe: "https://www.youtube.com/@EpicScenery8K", views: 0, liked: false, watchDuration: 0, title: '' },

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
    <View key={item.id} style={styles.card}>
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
      <View style={{ alignItems: "center", gap: 5 }}>
                  <LinearGradient
                    colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
                    start={[0, 0]}
                    end={[1, 1]}
                    style={styles.buttonBorder}
                  >
  <TouchableOpacity onPress={()=>navigation.navigate("playVideo",{item:item})} style={styles.button}>
        <Text allowFontScaling={false} style={styles.buttonText}>Watch Now</Text>
      </TouchableOpacity>
                  </LinearGradient>
                </View>
    </View>
  );

  return (
    <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }} imageStyle={{ resizeMode: "cover" }}>
<Header navigation={navigation}></Header>
    <ScrollView>
    <View style={styles.row}>
        {/* YouTube Players */}
        <FlatList
        numColumns={2}
          data={youtubeVideos}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.columnWrapper}

        />
      </View> 
    </ScrollView>
      
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  section: {
    // marginTop: 10,
    paddingTop:10,
    gap:5,
    height:Dimensions.get('screen').height ,
    paddingBottom:150

  },
  sectionTitle: {
    fontWeight: "800",
    fontSize: 15,
    letterSpacing: 1,
    marginLeft: 18,
  },
  row: {
    flexDirection: "row",
    justifyContent:"space-around"
   
   
  },
  list: {
    paddingTop: 15,
    alignItems:"center",
    gap:10,

    // paddingHorizontal:10
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
    width: width * 0.45,
    paddingBottom:10,
    
  },
  iconContainer: {
    // marginBottom: 10,
    position:"absolute",
    top:70,
    left:"40%"
    
  },
  thumbnail: {
    width: width * 0.45,
    height: 80,
    borderRadius: 8,
    marginBottom: 20,
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
    letterSpacing:0.5
  },
  button: {
    // backgroundColor: '#CB1C64',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  columnWrapper:{
    // flex:1,
    justifyContent:"space-around",
    gap:8
  },
  buttonBorder: {
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,
    width:120,
    marginTop:5


  },
});

export default YoutubeScreen;
