import React from "react";
import {  StyleSheet, View , Button, Text, TouchableOpacity} from 'react-native'

const WelcomeScreen = ({navigation})=>{
    return(
        <View style={styles.wrapper}>
            <Text className="text-primary text-6xl font-bold">
                    TWITTY
            </Text>
            <Text className="text-center" >
                    Welcome to ultimate social media built with React Native and Express JS
            </Text>
            <TouchableOpacity className="bg-primary mt-4 px-6 py-4 rounded-full" onPress={()=>{navigation.navigate('auth')}}>
                <Text style={styles.buttonText}>
                    GET IN 
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 20  
    },
    title:{
        color: "#1DA1F2",
        fontSize: 48,
        fontWeight: "600"

    },
    subtitle:{
        textAlign: "center"
    },
    button:{
        backgroundColor: "#1DA1F2",
        marginTop: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 40
    },
    buttonText:{
        color: 'white',
        fontSize: 20
    }
})


export default WelcomeScreen;