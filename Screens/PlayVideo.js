import React, { useState, useRef, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Alert, Linking } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";
import Icon from 'react-native-vector-icons/FontAwesome';
import { useColorScheme } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Circle } from 'react-native-progress';
import Header from '../Components/Header';

const PlayVideo = ({ navigation }) => {
  const route = useRoute();
  const item = route.params?.item;
  const [playing, setPlaying] = useState(true);
  const playerRef = useRef(null);
  const [watchDuration, setWatchDuration] = useState(0);
  const [videoLength, setVideoLength] = useState(0); // Ensure this is defined here
  const [timerReached, setTimerReached] = useState(false);
  const [countdown, setCountdown] = useState(30);
  const [progress, setProgress] = useState(false);
  const colorScheme = 'light';
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';

  const handleLike = (url) => {
    Linking.openURL(`https://www.youtube.com/watch?v=${url}`).catch(() => Alert.alert("Failed to open YouTube"));
  };

  const handleSubscribe = (url) => {
    Linking.openURL(url).catch(() => Alert.alert("Failed to open YouTube"));
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const onProgress = (currentTime) => {
    setProgress(true);
    if (currentTime > watchDuration + 10) {  // Allow a 10-second buffer
      playerRef.current.seekTo(watchDuration); // Restrict skipping forward
    } else {
      setWatchDuration(currentTime);
    }
  };
  
  const onReady = () => {
    if (playerRef.current) {
      playerRef.current
        .getDuration()
        .then((duration) => setVideoLength(duration)) // Update video length
        .catch((error) => console.log("Error getting video duration:", error));
    }
  };

  const onChangeState = (state) => {
    if (state === "ended") {
      setPlaying(false);
    } else if (state === "paused") {
      setPlaying(false);
    } else if (state === "playing") {
      setPlaying(true);
    }
  };

  useEffect(() => {
    if (playing && countdown > 0 && watchDuration < 30) {
      const timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else if (countdown <= 0 || Math.round(watchDuration) >= 30) {
      setTimerReached(true);
    }
  }, [playing, countdown, watchDuration]);

  useEffect(() => {
    const interval = setInterval(() => {
      playerRef.current
        ?.getCurrentTime()
        .then((currentTime) => {
          setProgress(true);
          setWatchDuration(currentTime);
        })
        .catch((error) => console.log("Error in interval time check:", error));
    }, 1000);

    return () => clearInterval(interval);
  }, [watchDuration]);

  return (
    <View style={styles.container}>
      <Header navigation={navigation}></Header>
      <View key={item.id} style={styles.videoContainer}>
        {playing && progress && !timerReached && (
          <View style={styles.timerContainer}>
            <Circle
              progress={countdown / 30}
              size={50}
              showsText={true}
              textStyle={{
                fontSize: 15,
                color: scheme === 'dark' ? "white" : "black"
              }}
              formatText={() => `${Math.round(countdown)}s`}
              color={scheme === 'dark' ? "#4A90E2" : "#1E90FF"}
              unfilledColor={scheme === 'dark' ? "#333" : "lightgray"}
            />
          </View>
        )}

        <YoutubePlayer
          ref={playerRef}
          height={220}
          play={playing}
          videoId={item.videoId}
          initialPlayerParams={{
            controls: false,
            modestbranding: true,
          }}
          onChangeState={onChangeState}
          onReady={onReady}
          onProgress={onProgress}
        />

        <Text allowFontScaling={false} style={styles.videoTitle}>{item.title}</Text>

        <View style={styles.buttonContainer}>
          <View style={styles.viewsContainer}>
            <Icon name="eye" size={28} style={{ color: scheme === 'dark' ? "white" : "gray" }} />
            <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>{item.views}</Text>
          </View>
          <TouchableOpacity onPress={() => handleLike(item.videoId)} style={styles.likeButton}>
            <Icon name={item.liked ? "thumbs-up" : "thumbs-o-up"} size={28} color={item.liked ? "blue" : scheme === 'dark' ? "white" : "gray"} />
            <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>{item.liked ? "Liked" : "Like"}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleSubscribe(item.subscribe)} style={styles.subscribeButton}>
            <Icon name="youtube-play" size={28} color="red" />
            <Text allowFontScaling={false}  style={[styles.buttonText, { color: scheme === "dark" ? "white" : "black" }]}>Subscribe</Text>
          </TouchableOpacity>
        </View>

        <Text allowFontScaling={false}  style={{ color: scheme === 'dark' ? "white" : "black", textAlign: 'center' }}>
          Watch Duration: {formatTime(watchDuration)} / {formatTime(videoLength)}
        </Text>

        {timerReached && (
          <TouchableOpacity
            style={styles.crossButton}
            onPress={() => navigation.navigate('Home')}>
            <Text allowFontScaling={false}  style={styles.crossText}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  videoContainer: {
    marginVertical: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
  },
  viewsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subscribeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: 'bold'
  },
  timerContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  crossButton: {
    position: 'absolute',
    top: -10,
    right: 170,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    width: 40
  },
  crossText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  videoTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 5,
    letterSpacing: 0.5,
    marginLeft: 10,
    color: "#b5179e"
  },
});

export default PlayVideo;
