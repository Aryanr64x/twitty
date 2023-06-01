import React, { useState } from "react";
import {StyleSheet, View} from 'react-native'
import { Text } from "react-native-paper";
import SignUp from "../components/SignUp";
import SignIn from "../components/SignIn";
const AuthScreen = ({navigation})=>{
    const [showSignUp, setShowSignUp] = useState(false)
    const authorize = ()=>{
            navigation.navigate('home')
    }
    return (
        <View style={styles.wrapper}>
            {
                (showSignUp) ? (<SignUp  onSignInRequest={()=>{setShowSignUp(false)}} onSignUp={authorize} />) : (<SignIn  onSignUpRequest={()=>{setShowSignUp(true)}}  onSignIn={authorize}  />)
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        paddingHorizontal: 20
    } 
});


export default AuthScreen;