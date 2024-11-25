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
  Keyboard,
  Pressable
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // For dropdown
import DateTimePicker from "@react-native-community/datetimepicker"; // For calendar
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";
import Header from "../Components/Header";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';

const width = Dimensions.get('screen').width
const ProfileScreen = ({ navigation }) => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();

  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState(""); // For dropdown
  const [dateOfBirth, setDateOfBirth] = useState(new Date()); // For date picker
  const [showDatePicker, setShowDatePicker] = useState(false); // To toggle date picker

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



  const [isProfileEditing, setIsProfileEditing] = useState(true);

  const toggleProfileEditing = () => {
    setIsProfileEditing(!isProfileEditing);
  };


  const [isContactEditing, setIsContactEditing] = useState(false);

  const toggleContactEditing = () => {

    setIsContactEditing(!isContactEditing);
    setIsProfileEditing(false)
    setIsEducationEditing(false)
    setIsSocialEditing(false)
  };

  const [isEducationEditing, setIsEducationEditing] = useState(false)

  const toggleEducationEditing = () => {
    setIsEducationEditing(!isEducationEditing)
    setIsProfileEditing(false)
    setIsContactEditing(false)
    setIsSocialEditing(false)
  }


  const [isSocialEditing, setIsSocialEditing] = useState(false)

  const toggleSocialEditing = () => {
    setIsSocialEditing(!isSocialEditing)
    setIsProfileEditing(false)
    setIsEducationEditing(false)
    setIsContactEditing(false)
  }


  const [educationDetails,setEducationDetails]= useState([])
  const [personalDetails,setPersonalDetails]= useState([])
  const [contactDetails,setContactDetails]= useState([])
  const [socialDetails,setSocialDetails]= useState([])


  const handlePersonalInfoSubmit = (data) => {
    Keyboard.dismiss()
    console.log(data);
    setIsProfileEditing(false)
   
  };

//contact
const [email, setEmail] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [whatsappNumber, setWhatsappNumber] = useState("")
  const [address, setAddress] = useState("")

  const handleContactSubmit = (data) => {
    Keyboard.dismiss()
    console.log(data);
    setIsContactEditing(false)
   
  };

//education

  const [showPassingDatePicker, setShowPassingDatePicker] = useState(false);

const [degree,setDegree]= useState("")
const [college,setCollege]  = useState("")
const [branch,setBranch]= useState("")
const [passingYear,setPassingYear]= useState(new Date())

const onPassingDateChange = (event, selectedDate) => {
  setShowPassingDatePicker(false);
  if (selectedDate) {
    setPassingYear(selectedDate);
  }
};
const handleEducationSubmit = (data) => {
  Keyboard.dismiss()
  console.log(data,passingYear);
  setIsEducationEditing(false)
 
};

//social

const [youtube,setYoutube]= useState("")
const [facebook,setFacebook]= useState("")
const [instagram,setInstagram]= useState("")
const [twitter,setTwitter]= useState("")

const handleSocialSubmit = (data) => {
    Keyboard.dismiss()
    console.log(data);
    setIsSocialEditing(false)
   
  };

  

  return (

      <ImageBackground source={require("../assets/bg.png")} style={styles.container} imageStyle={{ resizeMode: "cover" }}>
        <Header navigation={navigation}></Header>
        <ScrollView keyboardShouldPersistTaps='handled' >

        {/* Profile Image */}
        <View style={{ width: width, alignItems: "center", marginBottom: 25 }}>
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


        <View style={{ paddingHorizontal: 15, width: width }}>

          {/* Personal Details */}

          <Pressable onPress={toggleProfileEditing} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>Personal Details</Text>
            <TouchableOpacity onPress={toggleProfileEditing}>

              {!isProfileEditing ? <AntDesign name="edit" size={20} color="#C93393" /> :
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color="#7209b7"
                />}
            </TouchableOpacity>
          </Pressable>

          {isProfileEditing &&
            <View>
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

   {/* Submit Button */}
   <View style={{ width: width, alignItems: "center", marginBottom: 20 }}>
          <LinearGradient
            colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBackground}
          >

            <TouchableOpacity onPress={handleSubmit(handlePersonalInfoSubmit)} style={{ alignItems: "center", justifyContent: "center" }}>
              <Text allowFontScaling={false}style={styles.submitButtonText}>Save Details</Text>
            </TouchableOpacity>


          </LinearGradient>
        </View>
            </View>
          }


<Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>

          {/* Contact Information */}
          <Pressable onPress={toggleContactEditing} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>Contact Information</Text>
            <TouchableOpacity onPress={toggleContactEditing}>

              {!isContactEditing ? <AntDesign name="edit" size={20} color="#C93393" /> :
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color="#7209b7"
                />}
            </TouchableOpacity>
          </Pressable>

          {isContactEditing &&

            <View>

              <Text allowFontScaling={false} style={styles.dropdownLabel}>Email</Text>
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
                    placeholder=""
                    keyboardType="email-address"
                    placeholderTextColor="#333"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                )}
                name="email"
              />

            </LinearGradient>


            <Text allowFontScaling={false} style={styles.dropdownLabel}>Mobile Number</Text>
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
                    placeholder=""
                     keyboardType="phone-pad" 
                    placeholderTextColor="#333"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                )}
                name="mobile"
              />
            </LinearGradient>



            <Text allowFontScaling={false} style={styles.dropdownLabel}>WhatsApp Number</Text>
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
                    placeholder=""
                     keyboardType="phone-pad" 
                    placeholderTextColor="#333"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                  />
                )}
                name="whatsapp"
              />
            </LinearGradient>


            <Text allowFontScaling={false} style={styles.dropdownLabel}>Address</Text>

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
                    placeholder=""
                    placeholderTextColor="#333"
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    multiline
                  />
                )}
                name="address"
              />

            </LinearGradient>

                 {/* Submit Button */}
        <View style={{ width: width, alignItems: "center", marginBottom: 20 }}>
          <LinearGradient
            colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBackground}
          >

            <TouchableOpacity onPress={handleSubmit(handleContactSubmit)} style={{ alignItems: "center", justifyContent: "center" }}>
              <Text allowFontScaling={false} style={styles.submitButtonText}>Save Details</Text>
            </TouchableOpacity>


          </LinearGradient>
        </View>
            </View>

          }

<Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>


          {/* Educational Information */}
          <Pressable onPress={toggleEducationEditing} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>Educational Information</Text>

            <TouchableOpacity onPress={toggleEducationEditing}>
              {!isEducationEditing ? <AntDesign name="edit" size={20} color="#C93393" /> :
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color="#7209b7"
                />}
            </TouchableOpacity>
          </Pressable>
          {isEducationEditing && <View>


            <Text allowFontScaling={false} style={styles.subSectionTitle}>Higher Qualification</Text>
            <Text allowFontScaling={false} style={styles.dropdownLabel}>Degree</Text>

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
                        placeholder=""
                        placeholderTextColor="#333"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="degree"
                    />

</LinearGradient>
<Text allowFontScaling={false} style={styles.dropdownLabel}>University/College Name</Text>

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
                        placeholder=""
                        placeholderTextColor="#333"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="college"
                    />
                    </LinearGradient>
<Text allowFontScaling={false} style={styles.dropdownLabel}>Specialization/Branch</Text>

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
                        placeholder=""
                        placeholderTextColor="#333"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="branch"
                    />
                    </LinearGradient>
<Text allowFontScaling={false} style={styles.dropdownLabel}>Year of Passing</Text>
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
            {passingYear?passingYear.toDateString():null}
          </Text>
        </TouchableOpacity>
        {showPassingDatePicker && (
          <DateTimePicker
            value={passingYear}
            mode="date"
            display="default"
            onChange={onPassingDateChange}
            maximumDate={new Date()} // Prevent selecting future dates
          />
        )}

      </LinearGradient>



               {/* Submit Button */}
        <View style={{ width: width, alignItems: "center", marginBottom: 20 }}>
          <LinearGradient
            colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBackground}
          >

            <TouchableOpacity onPress={handleSubmit(handleEducationSubmit)} style={{ alignItems: "center", justifyContent: "center" }}>
              <Text allowFontScaling={false} style={styles.submitButtonText}>Save Details</Text>
            </TouchableOpacity>


          </LinearGradient>
        </View>
          </View>}

          <Text allowFontScaling={false} style={{borderWidth:0.4,borderColor:"#D0D0D0",height:0.5,width:"100%",marginTop:5,marginBottom:5}}></Text>

          {/* social media */}
          <Pressable  onPress={toggleSocialEditing} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Text allowFontScaling={false} style={styles.sectionTitle}>Social Media Links</Text>
            <TouchableOpacity onPress={toggleSocialEditing}>

              {!isSocialEditing ? <AntDesign name="edit" size={20} color="#C93393" /> :
                <Ionicons
                  name="checkmark-done"
                  size={24}
                  color="#7209b7"
                />}
            </TouchableOpacity>
          </Pressable>

          {isSocialEditing &&

            <View>

              <Text allowFontScaling={false} style={styles.dropdownLabel}>Youtube</Text>

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
    placeholder=""
    placeholderTextColor="#333"
      onBlur={onBlur}
      onChangeText={value => onChange(value)}
      value={value}
    />
  )}
  name="youtube"
/>
        </LinearGradient>


        <Text allowFontScaling={false} style={styles.dropdownLabel}>Facebook</Text>
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
    placeholder=""
    placeholderTextColor="#333"
      onBlur={onBlur}
      onChangeText={value => onChange(value)}
      value={value}
    />
  )}
  name="facebook"
/>
        </LinearGradient>



        <Text allowFontScaling={false} style={styles.dropdownLabel}>Instagram</Text>
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
    placeholder=""
    placeholderTextColor="#333"
      onBlur={onBlur}
      onChangeText={value => onChange(value)}
      value={value}
    />
  )}
  name="instagram"
/>
        </LinearGradient>


        <Text allowFontScaling={false} style={styles.dropdownLabel}>Twitter</Text>

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
    placeholder=""
    placeholderTextColor="#333"
      onBlur={onBlur}
      onChangeText={value => onChange(value)}
      value={value}
    />
  )}
  name="twitter"
/>
        </LinearGradient>



                           {/* Submit Button */}
        <View style={{ width: width, alignItems: "center", marginBottom: 20 }}>
          <LinearGradient
            colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
            start={[0, 0]}
            end={[1, 1]}
            style={styles.gradientBackground}
          >

            <TouchableOpacity onPress={handleSubmit(handleSocialSubmit)} style={{ alignItems: "center", justifyContent: "center" }}>
              <Text allowFontScaling={false} style={styles.submitButtonText}>Save Details</Text>
            </TouchableOpacity>


          </LinearGradient>
        </View>
            </View>
          }


        </View>





     
        </ScrollView>

      </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: "contain",
    width: Dimensions.get('screen').width,
    height:Dimensions.get('screen').height
  },
  profileImageContainer: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: 10,
    height: 128,
    // width: 125,
    borderRadius: 90,
    backgroundColor: "#d6336c"
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
    fontSize: 12,
  },
  sectionTitle: {
    fontSize: 15,
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

export default ProfileScreen;
