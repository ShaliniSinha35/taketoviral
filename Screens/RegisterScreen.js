import { View, Text, ImageBackground, StyleSheet, Image, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView, Dimensions,Pressable } from 'react-native'
import React,{useState} from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';


const width = Dimensions.get('screen').width

const RegisterScreen = ({navigation}) => {

     const [name,setName]= useState("")
    const [email, setEmail] = useState("")
    const [mobileNumber,setMobileNumber]= useState("")
  const [password, setPassword] = useState("")
  const [error,setErr]= useState("")

const dispatch = useDispatch()
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    Keyboard.dismiss()
    console.log(data);
    if(data.email!=="" && data.name!=="" && data.mobile!=="" && data.password!==""){
      dispatch(setUser(data)) 
      navigation.navigate("home") 
    }


  };

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    setErr(errors)
    return console.log(errors)
  }
    return (

        <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => Keyboard.dismiss()}>

            <ImageBackground imageStyle={{ resizeMode: "cover" }} source={require("../assets/sign.png")} style={styles.section}>

                <View>
                    <Image source={require("../assets/logo.png")} style={styles.logo} />
                </View>

                <View style={styles.heading}>
                    <Text allowFontScaling={false} style={{ fontWeight: "bold", letterSpacing: 1 }}>Sign Up to continue</Text>
                </View>

                <ScrollView keyboardShouldPersistTaps='handled'>
                    <KeyboardAvoidingView>

                        <View style={{ width: width, alignItems: "center" }}>

                         {/* name */}
                        <View style={styles.inputContainer}>
                                <LinearGradient
                                    colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientBorder} // Gradient is only the border
                                >
                                    <View style={styles.textInputContainer}>
                                        <Ionicons name="person-outline" size={20} color="#C93393" style={styles.icon} />
                                        <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        placeholder="Name"
                        placeholderTextColor="#333"
                        style={styles.textInput}
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="name"
                      rules={{ required: true,message:"Enter your name" }}
                    />

                                       
                                    </View>
                                </LinearGradient>

                                {errors.name && <Text allowFontScaling={false} style={{color:"red"}}>Name is required</Text>}

                            </View>

                            {/* Email */}
                            <View style={styles.inputContainer}>
                                <LinearGradient
                                    colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientBorder} // Gradient is only the border
                                >
                                    <View style={styles.textInputContainer}>
                                    <Ionicons name="mail-outline"  size={20} color="#C93393" style={styles.icon} />
                                    <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        placeholder="Email"
                        placeholderTextColor="#333"
                        style={styles.textInput}
                          keyboardType="email-address"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="email"
                      rules={{ required: true,message:"Enter your email" }}
                    />

                                        <TextInput
                                           
                                        />
                                    </View>
                                </LinearGradient>

                                {errors.email && <Text allowFontScaling={false} style={{color:"red"}}>Email is required</Text>}

                            </View>

                            {/* mobile number */}
                            <View style={styles.inputContainer}>
                                <LinearGradient
                                    colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientBorder} // Gradient is only the border
                                >
                                    <View style={styles.textInputContainer}>
                                      
                                      <Ionicons name="call-outline" size={20} color="#C93393" style={styles.icon} />
                                      
                                      <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                        placeholder="Mobile number"
                        placeholderTextColor="#333"
                        style={styles.textInput}
                        keyboardType="phone-pad"
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="mobile"
                      rules={{ required: true,message:"Enter your mobile number" }}
                    /> 
                                     
                                    </View>
                                </LinearGradient>
                                {errors.mobile && <Text allowFontScaling={false} style={{color:"red"}}>Mobile number is required</Text>}

                            </View>

{/* password */}

                            <View style={styles.inputContainer}>
                                <LinearGradient
                                    colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientBorder}
                                >
                                    <View style={styles.textInputContainer}>
                                        <Ionicons name="lock-closed-outline" size={20} color="#C93393" style={styles.icon} />
                                        <Controller
                      control={control}
                      render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                          placeholder="Password"
                          placeholderTextColor="#333"
                          style={styles.textInput}
                          onBlur={onBlur}
                          onChangeText={value => onChange(value)}
                          value={value}
                        />
                      )}
                      name="password"
                      rules={{ required: true,message:"Enter your password" }}
                    />
                                    </View>
                                </LinearGradient>

                                {errors.password && <Text allowFontScaling={false} style={{color:"red"}}>Password is required</Text>}

                            </View>



                            {/* submit */}
                                <LinearGradient
                                    colors={["#E7258E", "#C93393", "#A84497", "#794EA0"]}
                                    start={[0, 0]}
                                    end={[1, 1]}
                                    style={styles.gradientBackground}
                                >

                                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={{justifyContent:"center",alignItems:"center",width:"100%"}}>
                                        <Text style={{color:"#fff",fontWeight:"bold",textAlign:"center",fontSize:18}}>Sign Up</Text>
                                    </TouchableOpacity>

                                </LinearGradient>

                                <Pressable onPress={()=>navigation.navigate("Login")} style={{marginTop:5}}><Text>Already have an account? Sign In </Text></Pressable>



                        </View>






                    </KeyboardAvoidingView>
                </ScrollView>



            </ImageBackground>

        </TouchableWithoutFeedback>

    );
}

const styles = StyleSheet.create({
    section: {
        flex: 1,
        alignItems: "center",
        paddingTop: 10,

    },
    logo: {
        height: 60,
        width: 60,
        resizeMode: "stretch",
    },
    heading: {
        marginTop: 20,
    },
    inputContainer: {
        marginTop: 15,
        width: '80%',
        // alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },

    gradientBorder: {
        padding: 2,
        borderRadius: 10,
        width: '100%',
    },
    textInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 8,
    },
    textInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
    icon: {
        marginRight: 10,
    },

    gradientBackground: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        width: '70%',
        marginTop:20,
      },
});

export default RegisterScreen;
