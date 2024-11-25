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
import { useForm,Controller } from "react-hook-form";
import Header from "../Components/Header";
import * as ImagePicker from 'expo-image-picker';
import { Keyboard } from "react-native";
import Toast from 'react-native-toast-message';

const width= Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const PersonalDetails = ({ navigation }) => {


  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState(""); // For dropdown
  const [dateOfBirth, setDateOfBirth] = useState(new Date()); // For date picker
  const [showDatePicker, setShowDatePicker] = useState(false); // To toggle date picker
  const [name,setName]= useState("")
  const [hobbies,setHobbies]= useState("")

  const onDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate) {
      setDateOfBirth(selectedDate);
    }
  };


  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  

  const handlePersonalInfoSubmit = (data) => {
    Keyboard.dismiss()
    console.log(data);
    if(data){
      showToast()

    }
   
  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    setErr(errors)
    return console.log(errors)
  }

  const showToast = () => {
    Toast.show({
      type: 'success',
      // text1: 'Hello',
      text1: 'Your data is saved successfully!'
    });
  }

  return (
    <ScrollView keyboardShouldPersistTaps='handled' >

      <ImageBackground source={require("../assets/bg.png")} style={styles.container} imageStyle={{resizeMode:"cover"}}>
      <Header navigation={navigation}></Header>

      {/* Profile Image */}
      <View style={{width:width,alignItems:"center",marginBottom:20}}>
      <View style={styles.profileImageContainer}>
        <Image
          source={
        image
              ? { uri: image }
              : require("../assets/profile.jpg") // Use a default profile image
          }
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton} onPress={()=>pickImage()}>
         <Text allowFontScaling={false} style={styles.editButtonText}>Edit Profile Image</Text>
        </TouchableOpacity>
      </View> 
      </View>
     

     <View style={{paddingHorizontal: 15,width:width}}>

      {/* Personal Details */}
      <Text allowFontScaling={false} style={styles.sectionTitle}>Personal Details</Text>

      <Text allowFontScaling={false} style={styles.dropdownLabel}>Full Name</Text>


      <LinearGradient
        colors={["#d6336c", "#7209b7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >


<Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        style={styles.innerView}
                        placeholder="Enter your name"
                        placeholderTextColor="#333"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="name"
                    />
      </LinearGradient>


      {/* Gender Dropdown */}
      <Text allowFontScaling={false} style={styles.dropdownLabel}>Gender</Text>

      <LinearGradient
        colors={["#d6336c", "#7209b7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <Picker
          selectedValue={gender}
          onValueChange={(value) => setGender(value)}
          style={styles.innerView}
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
        </Picker>
      </LinearGradient>


      {/* Hobbies */}
      <Text allowFontScaling={false} style={styles.dropdownLabel}>Hobbies</Text>

      <LinearGradient
        colors={["#d6336c", "#7209b7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >

<Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        style={styles.innerView}
                        placeholder="Enter your hobby"
                        placeholderTextColor="#333"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="hobby"
                    />
      </LinearGradient>

      {/* Date of Birth Calendar */}

      <Text allowFontScaling={false} style={styles.dropdownLabel}>D.O.B</Text>
      <LinearGradient
        colors={["#d6336c", "#7209b7"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={styles.innerView}
        >
          <Text allowFontScaling={false} style={styles.datePickerText}>
            {dateOfBirth?dateOfBirth.toDateString():"Enter D.O.B"}
          </Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={dateOfBirth}
            mode="date"
            display="default"
            onChange={onDateChange}
            maximumDate={new Date()} // Prevent selecting future dates
          />
        )}

      </LinearGradient>

   



   




    
</View>




      
      {/* Submit Button */}
<View style={{width:width,alignItems:"center",marginBottom:20}}>
<LinearGradient
                colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                start={[0, 0]}
                end={[1, 1]}
                style={styles.gradientBackground}
              >

                    <TouchableOpacity onPress={handleSubmit(handlePersonalInfoSubmit)} style={{alignItems:"center",justifyContent:"center"}}>
        <Text allowFontScaling={false} style={styles.submitButtonText}>Save Details</Text>
      </TouchableOpacity>


              </LinearGradient>
</View>
<Toast       position='bottom'
              bottomOffset={80}></Toast>
    
</ImageBackground>
</ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode:"contain",
    width:Dimensions.get('screen').width,
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    height:128,
    width:125,
    borderRadius:90,
    backgroundColor:"#d6336c"
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    resizeMode:"contain"
  },
  editButton: {
    marginTop: 20,
    backgroundColor: "#d6336c",
    paddingHorizontal: 18,
    paddingVertical: 6,
    borderRadius: 5,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 11,
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
    fontSize: 12,
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
    letterSpacing:1
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
    justifyContent:"center",
    
  },
});

export default PersonalDetails;
