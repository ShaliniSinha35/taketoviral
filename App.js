import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import { AppNavigator } from './navigation/AppNavigator';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '././redux/store';
SplashScreen.preventAutoHideAsync();

export default function App() {


  

  useEffect(() => {
    setTimeout(async () => {
      await SplashScreen.hideAsync();
    }, 200);
  }, []);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Subscribe to network state updates
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    // Clean up the subscription on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        translucent={false}
      />
      {isConnected ? (
        <Provider store={store}>
        <PersistGate persistor={persistor}></PersistGate>
        <AppNavigator />
        </Provider>
      ) : (
        <View style={styles.noInternetContainer}>
          <Text style={styles.noInternetText}>No Internet Connection</Text>
          <Text style={styles.noInternetSubText}>Please check your connection and try again.</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  noInternetContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8d7da',
  },
  noInternetText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#721c24',
  },
  noInternetSubText: {
    fontSize: 16,
    color: '#721c24',
    marginTop: 8,
  },
});
