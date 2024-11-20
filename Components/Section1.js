import { View, Text, ImageBackground, Dimensions, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
const width = Dimensions.get('screen').width
const Section1 = ({navigation}) => {
    const socialIcons = [
        {
            id: 1,
            icon: require("../assets/mo/cy.png"),
            url: "youtube"
        },

        {
            id: 2,
            icon: require("../assets/mo/cf.png"),
            url: "youtube"
        },
        {
            id: 3,
            icon: require("../assets/mo/ci.png"),
            url: "youtube"
        },

        {
            id: 4,
            icon: require("../assets/mo/ct.png"),
            url: "youtube"
        },



    ]
    return (
        <ImageBackground source={require("../assets/mo/2.png")} style={styles.section}>
            <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>
                <Text allowFontScaling={false} style={styles.heading}>Watch And Earn</Text>
            </View>

            <View style={styles.socialIcon}>
                {
                    socialIcons.map((icon) => (
                        <TouchableOpacity onPress={()=>navigation.navigate("youtube")}>
                            <Image style={{ height: 50, width: 50, resizeMode: "contain" }} source={icon.icon}></Image>

                        </TouchableOpacity>
                    ))
                }
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    section: {
        width: width,
        padding: 10,
        resizemode: "contain",

        paddingVertical: 20,

    },
    socialIcon: {
        flexDirection: "row",
        paddingHorizontal: 10
        ,
        gap: 30
    },
    heading: {
        fontWeight: "800",
        letterSpacing: 1,
        fontSize: 15,
        marginBottom: 12
    }
})
export default Section1