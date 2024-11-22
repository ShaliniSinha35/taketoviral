import React, { useState } from "react";
import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Image,
    StyleSheet,
    ImageBackground,
    Dimensions,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // For dropdown
import DateTimePicker from "@react-native-community/datetimepicker"; // For calendar
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Header from "../Components/Header";
import { AntDesign } from "@expo/vector-icons";

const width = Dimensions.get('screen').width
const SocialDetails = ({ navigation }) => {
  


    const [isSocialEditing, setIsSocialEditing] = useState(false)

    const toggleSocialEditing = () => {
        setIsSocialEditing(!isSocialEditing)
    }



    return (
        <ScrollView keyboardShouldPersistTaps='handled' >

            <ImageBackground source={require("../assets/bg.png")} style={styles.container} imageStyle={{ resizeMode: "cover" }}>
                <Header navigation={navigation}></Header>

                {/* Profile Image */}


                <View style={{ paddingHorizontal: 15, width: width }}>


                    {/* social media */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <Text allowFontScaling={false} style={styles.sectionTitle}>Social Media Links</Text>
                        <TouchableOpacity onPress={toggleSocialEditing}>

                            {!isSocialEditing ? <AntDesign name="edit" size={20} color="#C93393" /> :
                                <Ionicons
                                    name="checkmark-done"
                                    size={24}
                                    color="#7209b7"
                                />}
                        </TouchableOpacity>
                    </View>

                    {isSocialEditing &&

                        <View>

                            <Text allowFontScaling={false} style={styles.dropdownLabel}>Youtube</Text>

                            <LinearGradient
                                colors={["#d6336c", "#7209b7"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBorder}
                            >

                                <TextInput style={styles.innerView} placeholder="" />
                            </LinearGradient>


                            <Text allowFontScaling={false} style={styles.dropdownLabel}>Facebook</Text>
                            <LinearGradient
                                colors={["#d6336c", "#7209b7"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBorder}
                            >

                                <TextInput style={styles.innerView} placeholder="" />
                            </LinearGradient>



                            <Text allowFontScaling={false} style={styles.dropdownLabel}>Instagram</Text>
                            <LinearGradient
                                colors={["#d6336c", "#7209b7"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBorder}
                            >

                                <TextInput style={styles.innerView} placeholder="" />
                            </LinearGradient>


                            <Text allowFontScaling={false} style={styles.dropdownLabel}>Twitter</Text>

                            <LinearGradient
                                colors={["#d6336c", "#7209b7"]}
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                style={styles.gradientBorder}
                            >

                                <TextInput style={styles.innerView} placeholder="" />
                            </LinearGradient>


                                  {/* Submit Button */}
                <View style={{ width: width, alignItems: "center", marginBottom: 20 }}>
                    <LinearGradient
                        colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                        start={[0, 0]}
                        end={[1, 1]}
                        style={styles.gradientBackground}
                    >

                        <TouchableOpacity style={{ alignItems: "center", justifyContent: "center" }}>
                            <Text allowFontScaling={false} style={styles.submitButtonText}>Save Details</Text>
                        </TouchableOpacity>


                    </LinearGradient>
                </View>
                        </View>
                    }

                    
                </View>


          

            </ImageBackground>
        </ScrollView>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:Dimensions.get('screen').height
        // resizeMode: "cover",
        // width: Dimensions.get('screen').width,
    },
    profileImageContainer: {
        alignItems: "center",
        marginBottom: 20,
        marginTop: 10,
        height: 128,
        width: 125,
        borderRadius: 90,
        backgroundColor: "#d6336c"
    },
    profileImage: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: "#ddd",
    },
    editButton: {
        marginTop: 20,
        backgroundColor: "#d6336c",
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 5,
    },
    editButtonText: {
        color: "#fff",
        fontSize: 14,
    },
    sectionTitle: {
        fontSize: 17,
        fontWeight: "bold",
        marginVertical: 15,
    },
    subSectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginVertical: 8,
    },
    input: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        marginTop: 8
    },
    dropdownContainer: {
        marginBottom: 10,
    },
    dropdownLabel: {
        fontSize: 14,
        color: "#111",
        // marginBottom: 5,
    },
    dropdown: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 8,
    },
    datePickerButton: {
        backgroundColor: "#f0f0f0",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        padding: 12,
        marginBottom: 10,
    },
    datePickerText: {
        fontSize: 14,
        color: "#333",
        marginVertical: 10
    },
    submitButton: {
        backgroundColor: "#7209b7",
        padding: 14,
        alignItems: "center",
        borderRadius: 8,

    },
    submitButtonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
        letterSpacing: 1
    },
    gradientBorder: {
        padding: 2, // This creates the thickness of the border
        borderRadius: 8, // For rounded corners
        marginBottom: 10,
        marginTop: 8
    },
    innerView: {
        backgroundColor: '#fff', // Inner view background
        borderRadius: 8, // Match the border's inner radius
        // alignItems: 'center',
        justifyContent: 'center',
        padding: 10, // Inner content padding

    },
    gradientBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 12,
        width: '75%',
        marginTop: 20,
        justifyContent: "center",

    },
});

export default SocialDetails;
