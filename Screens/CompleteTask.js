import { View, Text, ImageBackground, Dimensions, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
const width = Dimensions.get('screen').width
const CompleteTasks = ({navigation}) => {

  const tasks= [
    {
      id:0,
      title:'Unlocking the Future: The Evolution of Video Tech',
      image:require("../assets/mo/cy.png")

    },
    {
      id:1,
      title:'Unlocking the Future: The Evolution of Video Tech',
      image:require("../assets/mo/cf.png")

    },

    {
      id:2,
      title:'Unlocking the Future: The Evolution of Video Tech',
      image:require("../assets/voice.png")

    },


  ]
  return (
    <ImageBackground source={require("../assets/bg.png")} style={{flex:1}} imageStyle={{resizeMode:"cover"}}>
    <Header navigation={navigation}></Header>
    <View style={{ width: width, alignItems: 'center', }}>
        <Text
          allowFontScaling={false}
          style={{ fontWeight: 200, letterSpacing: 1, fontSize: 12,marginTop:5 }}
        >Complete Tasks</Text>

      </View>
    
      <View style={{paddingHorizontal:15,marginTop:15}}>
{tasks.map((item)=>(
  <LinearGradient
  key={item.id}

  colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
  start={[0, 0]}
  end={[1, 1]}
  style={styles.gradientBorder}
>
<View style={{paddingVertical:10,borderRadius:10,backgroundColor:"#fff"}}>
<View style={{padding:8,flexDirection:"row",alignItems:"center"}}>
<LinearGradient
  colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
  start={[0, 0]}
  end={[1, 1]}
  style={styles.imageBorder}
>
<Image source={require("../assets/4.png")} style={{height:80,width:80,resizeMode:"contain"}}></Image>
</LinearGradient>
<View style={{width:160}}>
<Text numberOfLines={5} style={{letterSpacing:1}}>Unlocking the Future: The Evolution of Video Tech</Text>
</View>
<View style={{alignItems:"center",gap:5}}>
<Image source={item.image} style={{height:30,width:30,resizeMode:"contain"}}></Image>
<LinearGradient
      colors={['#E7258E', '#C93393', '#A84497', '#794EA0']}
      start={[0, 0]}
      end={[1, 1]}
      style={styles.buttonBorder}
    >

<TouchableOpacity style={styles.button}>


<Text  allowFontScaling={false} style={{ color: '#fff', letterSpacing: 1,fontWeight:"bold",fontSize:10 }}>Completed</Text>
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

const styles= StyleSheet.create({
  gradientBorder: {
    padding: 2,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom:10
  },
  buttonBorder: {
    borderRadius: 10,
    paddingHorizontal: 3,
    paddingVertical: 2,
  

  },
  imageBorder: {
    // padding: 2,
    margin:2,

   
  },

  button: {
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal:15,
    paddingVertical:5,
    // backgroundColor:"#fff"
  },
})

export default CompleteTasks



// import React, { useState, useEffect } from 'react';
// import { View, StyleSheet, TouchableOpacity, Text, ScrollView, Linking, Image, Alert,ImageBackground, Dimensions } from 'react-native';
// import YoutubePlayer from "react-native-youtube-iframe";
// import WebView from 'react-native-webview';
// import Icon from 'react-native-vector-icons/FontAwesome'; 
// import { useColorScheme } from 'react-native';
// import Header from '../Components/Header';
// const width= Dimensions.get('screen').width
// const CompleteTask = ({ navigation }) => {
//   const [playing, setPlaying] = useState(false);
//   const colorScheme = useColorScheme();
//   const [scheme, setScheme] = useState(colorScheme || 'light');
//   const [videos, setVideos] = useState([
//     {
//       id: 1,
//       type: 'facebook',
//       url: "https://www.facebook.com/facebook/videos/10153231379946729/", 
//       videoId: "10153231379946729",
//       views: 0,
//       liked: false,
//       title: '', // Initialize title as an empty string
//     }
//   ]);
//   const accessToken = "YOUR_FACEBOOK_ACCESS_TOKEN"; // Replace with your Facebook access token

//   useEffect(() => {
//     // Fetch titles for each Facebook video
//     videos.forEach((video, index) => {
//       if (video.type === 'facebook') {
//         fetchFacebookVideoTitle(video.videoId, index);
//       }
//     });
//   }, []);

//   const fetchFacebookVideoTitle = async (videoId, index) => {
//     try {
//       const response = await fetch(`https://graph.facebook.com/${videoId}?fields=title&access_token=${accessToken}`);
//       const data = await response.json();
//       if (data.title) {
//         const updatedVideos = [...videos];
//         updatedVideos[index].title = data.title;
//         setVideos(updatedVideos);
//       }
//     } catch (error) {
//       console.error("Failed to fetch video title", error);
//     }
//   };

//   const handleLike = (index, item) => {
//     const updatedVideos = [...videos];
//     updatedVideos[index].liked = !updatedVideos[index].liked;
//     setVideos(updatedVideos);

//     const url = item.type === 'youtube'
//       ? `https://www.youtube.com/watch?v=${item.videoId}`
//       : item.url;

//     Linking.openURL(url).catch(() => Alert.alert("Failed to open link"));
//   };

//   const handlePlayVideo = (index) => {
//     const updatedVideos = [...videos];
//     updatedVideos[index].views += 1;
//     setVideos(updatedVideos);
//     setPlaying(true);
//   };

//   return (
//     // <View style={styles.container}>
//     //   <Header navigation={navigation} />
//     //   {/* <ScrollView>
//     //     {videos.map((item, index) => (
//     //       <View key={item.id} style={styles.videoContainer}>
//     //         {item.type === 'youtube' ? (
//     //           <YoutubePlayer
//     //             height={250}
//     //             videoId={item.videoId}
//     //             play={playing && index === item.id}
//     //             onChangeState={(state) => {
//     //               if (state === "ended") setPlaying(false);
//     //             }}
//     //           />
//     //         ) : (
//     //           <>
//     //             {!playing ? (
//     //               <TouchableOpacity onPress={() => handlePlayVideo(index)}>
//     //                 <Image
//     //                   source={{ uri: `https://graph.facebook.com/${item.videoId}/picture` }}
//     //                   style={styles.thumbnail}
//     //                 />
//     //               </TouchableOpacity>
//     //             ) : (
//     //               <WebView
//     //                 style={{ height: 250 }}
//     //                 source={{ uri: `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(item.url)}` }}
//     //                 allowsFullscreenVideo
//     //               />
//     //             )}
//     //           </>
//     //         )}
//     //         {/* Display the video title */}
//     //         {/* <Text style={[styles.title, { color: scheme === "dark" ? "white" : "black" }]}>
//     //           {item.title || "Loading title..."}
//     //         </Text>
//     //         <View style={styles.buttonContainer}>
//     //           <TouchableOpacity onPress={() => handleLike(index, item)} style={styles.likeButton}>
//     //             <Icon name={item.liked ? "thumbs-up" : "thumbs-o-up"} size={28} color={item.liked ? "blue" : scheme === 'dark' ? "white" : "gray"} />
//     //             <Text style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>
//     //               {item.liked ? "Liked" : "Like"}
//     //             </Text>
//     //           </TouchableOpacity>
//     //         </View>
//     //       </View>
//     //     ))}
//     //   </ScrollView> */}
//     //   <Text style={{textAlign:"center"}}>Complete Task</Text>
//     // </View>

 
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor:"#fff"
//   },
//   videoContainer: {
//     marginVertical: 10,
//     backgroundColor: '#fff',
//     padding: 10,
//     borderRadius: 10,
//     elevation: 2,
//   },
//   thumbnail: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//     resizeMode: "contain"
//   },
//   title: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginVertical: 8,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     paddingVertical: 10,
//   },
//   likeButton: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   buttonText: {
//     marginLeft: 8,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default CompleteTask;

