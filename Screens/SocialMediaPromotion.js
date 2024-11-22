import { View, Text, ImageBackground, Dimensions, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import Header from '../Components/Header'
const width = Dimensions.get('screen').width
import MaskedView from '@react-native-community/masked-view'
const SocialMediaPromotion = ({ navigation }) => {

    const tasks = [
        {
            id: 0,
            name: 'Lorem Ipsum',
            image: require("../assets/instapage.jpg"),
            designation: "Business",
            about: "Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"

        },
        {
            id: 1,
            name: 'Lorem Ipsum',
            image: require("../assets/instapage.jpg"),
            designation: "Business",
            about: "Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"


        },

        {
            id: 2,
            name: 'Lorem Ipsum',
            image: require("../assets/instapage.jpg"),
            designation: "Business",
            about: "Lorem Ipsum dolor sit amet lorem ispsum dolor sit amet lorem ipsum dolor sit amet"


        },


    ]


    return (
        <ImageBackground source={require("../assets/bg.png")} style={{ flex: 1 }} imageStyle={{ resizeMode: "cover" }}>
            <Header navigation={navigation}></Header>
            <View style={{ width: width, alignItems: 'center', }}>
                <Text
                    allowFontScaling={false}
                    style={{ fontWeight: 200, letterSpacing: 1, fontSize: 12, marginTop: 5 }}
                >Social Media Promotion</Text>

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
                            <View style={{ paddingVertical: 8, borderRadius: 10, backgroundColor: "#fff", paddingHorizontal: 0 }}>
                                <View style={{ padding: 8, flexDirection: "column", alignItems: "center" }}>
                                    <View style={{}}>
                                    <MaskedView
        maskElement={<Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,textAlign:"center" }}>Page: @{item.name}</Text>}
      >
        <LinearGradient colors={['#FF1493', '#8A2BE2', '#FF1493', '#8A2BE2']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}>
        <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1,textAlign:"center",opacity:0 }}>Page: @{item.name}</Text>
        </LinearGradient>
      </MaskedView>
                                        {/* <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1, textAlign: "center" }}>Page: @{item.name}</Text> */}
                                    </View>
                                    <Text allowFontScaling={false} style={{ borderWidth: 0.4, borderColor: "#D0D0D0", height: 0.5, width: "100%", marginTop: 5, marginBottom: 5 }}></Text>

                                    <Image source={item.image} style={{ height: 150, width: 280, resizeMode: "contain" }}></Image>

                                    <Text allowFontScaling={false} style={{ borderWidth: 0.4, borderColor: "#D0D0D0", height: 0.5, width: "100%", marginTop: 5, marginBottom: 5 }}></Text>

                                    <View>
                                        <TouchableOpacity>
                                        <Text allowFontScaling={false} style={{ color: "blue", fontWeight: "bold" }}>Follow Our Page</Text>

                                        </TouchableOpacity>

                                        <Text allowFontScaling={false} numberOfLines={2} style={{ letterSpacing: 1, fontSize: 10, marginTop: 5 }}>About: {item.about}</Text>

                                    </View>

                                    <Text allowFontScaling={false} style={{ borderWidth: 0.4, borderColor: "#D0D0D0", height: 0.5, width: "100%", marginTop: 5, marginBottom: 5 }}></Text>

                                    {/* social links */}

                                    <View style={{ width: "100%" }}>
                                        <Text allowFontScaling={false} style={{ fontSize: 10, marginLeft: 8 }}>Social Links:</Text>
                                        <View style={{ flexDirection: "row", margin: 8, gap: 10 }}>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require("../assets/mo/cy.png")}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require("../assets/mo/cf.png")}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require("../assets/mo/ci.png")}></Image>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Image style={{ height: 30, width: 30, resizeMode: "contain" }} source={require("../assets/mo/ct.png")}></Image>
                                            </TouchableOpacity>


                                        </View>

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

export default SocialMediaPromotion






