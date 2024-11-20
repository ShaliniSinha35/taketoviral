import React, { useEffect, useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons, Entypo, FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet, ScrollView, View, Text, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import CompleteTask from '../Screens/CompleteTask';
import IncompleteTasks from '../Screens/IncompleteTasks';
import Share from '../Screens/Share';
import YouTubeVideos from '../Screens/YotubeVideos';
import PlayVideo from '../Screens/PlayVideo';
import LoginScreen from '../Screens/LoginScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Dashboard from '../Screens/Dashboard';
import RegisterScreen from '../Screens/RegisterScreen';
import { useSelector } from 'react-redux';
import PersonalDetails from '../Screens/PersonalDetails';
import ContactDetails from '../Screens/ContactDetails';
import EducationDetails from '../Screens/EducationDetails';
import SocialDetails from '../Screens/SocialDetails';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export const AppNavigator = () => {

    const userInfo = useSelector((state) => state.user ? state.user.userInfo : null)
    console.log(userInfo)

    const flag = true;

    const drawerMenu = [
        // { id: 0, name: "Home", url: "Home" },
        { id: 5, name: "My Dashboard", url: "dashboard" },
        {
            id: 6,
            name: "My Profile",
            submenu: [
                { id: 0, name: "Update Personal Profile", url: "profile" },
                { id: 1, name: "Update Contact Information", url: "contact" },
                { id: 2, name: "Update Education Information", url: "education" },
                { id: 3, name: "Update Social Media Information", url: "social" },
            ],
            icon: <AntDesign name="arrowright" size={18} color="#9e0059" />,
            dropdownIcon: <AntDesign name="down" size={15} color="#892784" />,
            url: ""
        },
        { id: 1, name: "Tasks", url: "CompleteTask" },
        { id: 2, name: "Incomplete Task", url: "IncompleteTask" },
        // { id: 3, name: "My Profile", url: "profile" },
        { id: 4, name: "Share", url: "Share" },
     
        // { id: 6, name: "Login", url: "Login" },
        // { id: 7, name: "Register", url: "register" },

    ];


    function StackNavigator() {
        return (
            <Stack.Navigator>




                {userInfo ? <Stack.Screen name="Home" options={{ headerShown: false }} component={Home} />
                    :
                    <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />

                }
                <Stack.Screen name="Profile" options={{ headerShown: false }} component={Profile} />
                <Stack.Screen name="CompleteTask" options={{ headerShown: false }} component={CompleteTask} />
                <Stack.Screen name="IncompleteTask" options={{ headerShown: false }} component={IncompleteTasks} />
                <Stack.Screen name="youtube" options={{ headerShown: false }} component={YouTubeVideos} />
                <Stack.Screen name="playVideo" options={{ headerShown: false }} component={PlayVideo} />
                {/* <Stack.Screen name="profile" options={{ headerShown: false }} component={ProfileScreen} /> */}
                <Stack.Screen name="dashboard" options={{ headerShown: false }} component={Dashboard} />
                <Stack.Screen name="register" options={{ headerShown: false }} component={RegisterScreen} />
                <Stack.Screen name="profile" options={{ headerShown: false }} component={PersonalDetails} />
                <Stack.Screen name="contact" options={{ headerShown: false }} component={ContactDetails} />
                <Stack.Screen name="education" options={{ headerShown: false }} component={EducationDetails} />
                <Stack.Screen name="social" options={{ headerShown: false }} component={SocialDetails} />



            </Stack.Navigator>
        );
    }

    const DrawerContent = ({ navigation }) => {
        const [submenuVisible, setSubmenuVisible] = useState({});

        const toggleSubmenu = (id) => {
            setSubmenuVisible((prevState) => ({
                ...prevState,
                [id]: !prevState[id],
            }));
        };
        return (
            <ScrollView style={{ flex: 1, paddingTop: 10 }} aria-hidden={false}>
                <Entypo name="cross" size={30} color="#892784" onPress={() => navigation.closeDrawer()} style={{ marginLeft: 15 }} />
                <View style={{ marginTop: 30, width: Dimensions.get('screen').width }}>
                    <FlatList
                        keyExtractor={(item) => item.id.toString() + item.name}
                        data={drawerMenu}
                        scrollEnabled={false}
                        renderItem={({ item }) => (
                            <View key={item.id} style={{ justifyConytent: "center", gap: 2, padding: 5 }}>
                                {item.submenu ? (
                                    <>
                                        <TouchableOpacity onPress={() => toggleSubmenu(item.id)} style={{ flexDirection: "row", alignItems: "center", padding: 15, gap: 15, marginLeft: 25 }}>
                                            {item.icon}
                                            <Text allowFontScaling={false} style={{ fontSize: 13, color: "black", fontWeight: 500 }}>{item.name}</Text>
                                            <View style={{ marginLeft: 10 }}>{item.dropdownIcon}</View>
                                        </TouchableOpacity>
                                        {submenuVisible[item.id] && (
                                             <>

                                            <View style={styles.submenu}>
                                                {item.submenu.map((subitem) => (
                                                    <>
                                                    <TouchableOpacity key={subitem.id} onPress={() => navigation.navigate(subitem.url)} style={{ flexDirection: "row", alignItems: "center", padding: 10, gap: 15 }}>
                                                        <AntDesign name="arrowright" size={15} color="#892784" />
                                                        <Text allowFontScaling={false} style={{ fontSize: 11, color: "black" }}>{subitem.name}</Text>

                                                    </TouchableOpacity>
                                                    {subitem.id !== item.submenu.length - 1 && 
                                                    <Text allowFontScaling={false} style={{ height: 1, borderColor: "#D0D0D0", borderWidth: 0.5, marginTop: 0 }} />
                                                }

                                                    </>
                                                    
                                                ))}

                                            </View>
                                            </>
                                        )}
                                    </>
                                ) : (
                                    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", padding: 15, gap: 15, marginLeft: 20 }} onPress={() => item.name === "Logout" ? handleLogout() : navigation.navigate(item.url)}>
                                        {item.icon}
                                        <Text allowFontScaling={false} style={{ fontSize: 13, color: "black", fontWeight: 500 }}>  <AntDesign name="arrowright" size={15} color="#892784" />   {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )}
                                <Text allowFontScaling={false} style={{ height: 1, borderColor: "#CB1C64", borderWidth: 0.5, marginTop: 0 }} />
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        );
    };

    const BottomNavigator = () => {
        return (

            <SafeAreaProvider>

                <Tab.Navigator
                    initialRouteName='Home'
                    screenOptions={{
                        headerShown: false,

                        tabBarStyle: {
                            elevation: 15,
                            height: 65,
                            borderTopWidth: 1,
                            backgroundColor: "#CB1C64",
                            paddingBottom: 0,
                        },
                        tabBarShowLabel: false, // Hide labels for a cleaner look
                    }}
                >


                    <Tab.Screen
                        name="profile"
                        component={ProfileScreen}
                        options={{
                            headerShown: false,

                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <View
                                        style={{

                                            height: 50,
                                            width: 50,
                                            borderRadius: 30,
                                            backgroundColor: "#7209b7",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            elevation: 5,
                                            borderWidth: 1,
                                            borderColor: "#fff"
                                        }}
                                    >
                                        <Image
                                            source={require("../assets/image/p.png")}
                                            style={{
                                                height: focused ? 30 : 20,
                                                width: focused ? 30 : 20,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </View>
                                ) : (
                                    <Image
                                        source={require("../assets/image/p.png")}
                                        style={{ height: 20, width: 20, resizeMode: "contain" }}
                                    />
                                ),
                        }}
                    />
                    <Tab.Screen
                        name="CompleteTask"
                        component={CompleteTask}
                        options={{
                            headerShown: false,

                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <View
                                        style={{

                                            height: 50,
                                            width: 50,
                                            borderRadius: 30,
                                            backgroundColor: "#7209b7",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            elevation: 5,
                                            borderWidth: 1,
                                            borderColor: "#fff"
                                        }}
                                    >
                                        <Image
                                            source={require("../assets/image/L.png")}
                                            style={{
                                                height: focused ? 30 : 20,
                                                width: focused ? 30 : 20,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </View>
                                ) : (
                                    <Image
                                        source={require("../assets/image/L.png")}
                                        style={{ height: 20, width: 20, resizeMode: "contain" }}
                                    />
                                ),
                        }}
                    />

                    {/* Center Home Icon */}
                    <Tab.Screen
                        name="Home"
                        component={StackNavigator}
                        options={{
                            headerShown: false,

                            tabBarIcon: ({ focused }) => (
                                focused ? (<View
                                    style={{
                                        position: "absolute",
                                        top: -15,
                                        height: 50,
                                        width: 50,
                                        borderRadius: 30,
                                        backgroundColor: "#d81159",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        elevation: 5,
                                        borderWidth: 3,
                                        borderColor: "#fff"
                                    }}
                                >
                                    <Image
                                        source={require("../assets/image/h.png")}
                                        style={{
                                            height: focused ? 30 : 20,
                                            width: focused ? 30 : 20,
                                            resizeMode: "contain",
                                        }}
                                    />
                                </View>) :
                                    <View
                                        style={{
                                            position: "absolute",
                                            top: -15,
                                            height: 50,
                                            width: 50,
                                            borderRadius: 30,
                                            backgroundColor: "#d81159",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            elevation: 5,
                                        }}
                                    >
                                        <Image
                                            source={require("../assets/image/h.png")}
                                            style={{
                                                height: focused ? 30 : 20,
                                                width: focused ? 30 : 20,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </View>
                            ),
                        }}
                    />

                    <Tab.Screen
                        name="IncompleteTask"
                        component={IncompleteTasks}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <View
                                        style={{

                                            height: 50,
                                            width: 50,
                                            borderRadius: 30,
                                            backgroundColor: "#7209b7",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            elevation: 5,
                                            borderWidth: 1,
                                            borderColor: "#fff"

                                        }}
                                    >
                                        <Image
                                            source={require("../assets/image/c.png")}
                                            style={{
                                                height: focused ? 30 : 20,
                                                width: focused ? 30 : 20,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </View>
                                ) : (
                                    <Image
                                        source={require("../assets/image/c.png")}
                                        style={{ height: 20, width: 20, resizeMode: "contain" }}
                                    />
                                ),
                        }}

                    />

                    <Tab.Screen
                        name="Share"
                        component={Share}
                        options={{
                            tabBarIcon: ({ focused }) =>
                                focused ? (
                                    <View
                                        style={{

                                            height: 50,
                                            width: 50,
                                            borderRadius: 30,
                                            backgroundColor: "#7209b7",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            elevation: 5,
                                            borderWidth: 1,
                                            borderColor: "#fff"
                                        }}
                                    >
                                        <Image
                                            source={require("../assets/image/s.png")}
                                            style={{
                                                height: focused ? 25 : 20,
                                                width: focused ? 25 : 20,
                                                resizeMode: "contain",
                                            }}
                                        />
                                    </View>
                                ) : (
                                    <Image
                                        source={require("../assets/image/s.png")}
                                        style={{ height: 20, width: 20, resizeMode: "contain" }}
                                    />
                                ),
                        }}
                    />





                </Tab.Navigator>
            </SafeAreaProvider>

        );
    };


    return (
        <NavigationContainer>



            {!userInfo ?

                <StackNavigator>
                    {/* <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} /> */}
                </StackNavigator>


                :

                <Drawer.Navigator screenOptions={{ swipeEnabled: false, drawerStyle: { backgroundColor: "#f5f1ed", width: 240, opacity: 0.95 } }} drawerContent={(props) => <DrawerContent {...props} />}>
                    <Drawer.Screen name="Home" component={BottomNavigator} options={{ headerShown: false }} />
                </Drawer.Navigator>

            }




        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
    drawerItem: {
        padding: 10,
    },
    submenu: {
        borderColor: "#ffe4c4",
        borderTopWidth: 0.2,
    },
    submenuItem: {
        padding: 10,
    },
});
