import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert, ScrollView, BackHandler, Image, Platform,ImageBackground } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/FontAwesome'; 
import { Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useColorScheme } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Header from '../Components/Header';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';


const YouTubeVideos = ({navigation}) => {
  const API_KEY = 'AIzaSyBlLKD5rjAt8LCvdc6ZUiFxvZLJw7ssf5E'; // Replace this with your API key

  const [playing, setPlaying] = useState(true);
  const playerRefs = useRef([]); // Store multiple refs for multiple players
  const [flag, setFlag] = useState(false);
  // const colorScheme = useColorScheme();
  const colorScheme='light'
  const route = useRoute()

  const [scheme, setScheme] = useState('light'); // Keep track of the current scheme
  const [isOn, setIsOn] = useState(colorScheme === 'dark'); // Match toggle state to the scheme

  const [youtubeVideos, setYoutubeVideos] = useState([
    {
      id: 0,
      videoId: "R9oy81eji48",
      url: "https://www.youtube.com/watch?v=R9oy81eji48",
      subscribe: "https://www.youtube.com/@arideejay",
      views: 0,
      liked: false,
      watchDuration: 0, // Track watch duration in seconds
    },
    {
      id: 1,
      videoId: "aCghEsTPhdA",
      subscribe: "https://www.youtube.com/@cgluca",
      url: "https://www.youtube.com/watch?v=aCghEsTPhdA",
      views: 0,
      liked: false,
      watchDuration: 0,
    },
    {
      id: 2,
      videoId: "gUKAnQsz-Lo",
      subscribe: "https://www.youtube.com/@EpicScenery8K",
      url: "https://www.youtube.com/watch?v=gUKAnQsz-Lo",
      views: 0,
      liked: false,
      watchDuration: 0,
    },
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

  const handleLike = (url, index) => {
    setFlag(true);
    const updatedVideos = [...youtubeVideos];
    updatedVideos[index].liked = true;
    setYoutubeVideos(updatedVideos);
    Linking.openURL(`https://www.youtube.com/watch?v=${url}`).catch(() => Alert.alert("Failed to open YouTube"));
  };

  const handleVideoStart = (index) => {
    setFlag(true);
    const updatedVideos = [...youtubeVideos];
    updatedVideos[index].views += 1;
    setYoutubeVideos(updatedVideos);
  };

  const handleSubscribe = (url) => {
    Linking.openURL(url).catch(() => Alert.alert("Failed to open YouTube"));
  };

  const toggleColorScheme = () => {
    if (Platform.OS !== 'web') {
      const newScheme = scheme === 'dark' ? 'light' : 'dark';
      setScheme(newScheme);
      setIsOn(newScheme === 'dark'); // Update the toggle state
    }
  };

  // Show image for 15 seconds and disable back button
  const [showImage, setShowImage] = useState(true);
 
  // Poll video progress using getCurrentTime
  useEffect(() => {
    const interval = setInterval(() => {
      youtubeVideos.forEach((video, index) => {
        if (playerRefs.current[index]) {
          playerRefs.current[index]
            .getCurrentTime()
            .then((currentTime) => {
              // console.log(`Video ${index} time: ${currentTime}`); // Check if the time updates
              setYoutubeVideos((prevVideos) => {
                const updatedVideos = [...prevVideos];
                updatedVideos[index].watchDuration = currentTime; // Update watch duration in seconds
                return updatedVideos;
              });
            })
            .catch((err) => console.log('Error fetching time:', err));
        }
      });
    }, 1000); // Poll every second

    return () => clearInterval(interval);
  }, [youtubeVideos]);

  return (
    <View style={styles.container}>
     
     <Header navigation={navigation}></Header>
          <ScrollView>
            {/* YouTube Players */}
            {youtubeVideos.map((item, index) => (
              <View key={item.id} style={styles.videoContainer}>
                <YoutubePlayer
                  ref={(ref) => (playerRefs.current[index] = ref)} // Assign refs for each player
                  height={220}
                  initialPlayerParams={{ controls: false }}
                  videoId={item.videoId}
                  onChangeState={(state) => {
                    if (state === "ended") {
                      setPlaying(false);
                      handleVideoStart(index);
                    }
                  }}
                />
               <Text allowFontScaling={false}  style={styles.videoTitle}>{item.title}</Text>

                <View style={styles.buttonContainer}>
                  <View style={styles.viewsContainer}>
                    <Icon name="eye" size={28} style={{ color: scheme === 'dark' ? "white" : "gray" }} />
                    <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>{item.views}</Text>
                  </View>
                  <TouchableOpacity onPress={() => handleLike(item.videoId, index)} style={styles.likeButton}>
                    <Icon name={item.liked ? "thumbs-up" : "thumbs-o-up"} size={28} color={item.liked ? "blue" : scheme === 'dark' ? "white" : "gray"} />
                    <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>{item.liked ? "Liked" : "Like"}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => handleSubscribe(item.subscribe)} style={styles.subscribeButton}>
                    <Icon name="youtube-play" size={28} color="red" />
                    <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>Subscribe</Text>
                  </TouchableOpacity>
                </View>
                {/* Display Watch Duration */}
                <Text allowFontScaling={false}  style={{ color: scheme === 'dark' ? "white" : "black", textAlign: 'center' }}>
                  Watch Duration: {item.watchDuration.toFixed(2)} seconds
                </Text>
              </View>
            ))}
          </ScrollView>

         
        
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#000000",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  videoContainer: {
    marginVertical: 10, backgroundColor: '#fff', padding: 10, borderRadius: 10, elevation: 2,
  },
  buttonContainer: {
    flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10,
  },
  viewsContainer: {
    flexDirection: 'row', alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row', alignItems: 'center',
  },
  subscribeButton: {
    flexDirection: 'row', alignItems: 'center',
  },
  buttonText: { marginLeft: 8, fontSize: 16, fontWeight: 'bold' },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: 'white', elevation: 'bold' },
  bottomNav: {
    flexDirection: 'row', justifyContent: 'space-around', padding: 20, backgroundColor: 'white', elevation: 10,
  },
  navText: { marginTop: 4, fontSize: 12, color: 'gray' },
  image: {
    width: '100%',
    height: '100%',
    resizeMode:"contain"
  },

  thumbnail: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    backgroundColor: "",
    alignItems:"center",
    backgroundColor: 'transparent',
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    borderWidth:1,
    borderColor:"transparent"
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  logo:{
    height:70,
    width:70,
    resizeMode:"contain"
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    letterSpacing:0.5,
    marginLeft:10,
    color:"#b5179e"
  },
});

export default YouTubeVideos;
