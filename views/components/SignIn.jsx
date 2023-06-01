import React, { useContext, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { authContext } from "../../contexts/AuthContextWrapper";
const SignIn = ({ onSignIn, onSignUpRequest }) => {
    const [email, setEmail] = useState("")
    const [password, setPassword]=useState("")
    const auth = useContext(authContext)

    const signIn = async()=>{
        if(email !== "" && password != ""){
            const isSuccess = await auth.signIn(email, password);
            if(isSuccess){
                onSignIn();
            }
        }
    }


    return (
        <View className="">
            <Text className="text-3xl">
                Sign In
            </Text>
            <View className="mt-4">
                <Text className="text-xl">
                    Email:
                </Text>
                <TextInput
                    className="border-primary border-2 px-2 py-2 rounded-sm bg-white "
                    onChangeText={(text) => { setEmail(text) }}
                    placeholder="Enter your email ID..."
                />

            </View>
            <View className="mt-4">
                <Text className="text-xl">
                    Password:
                </Text>
                <TextInput
                    className="border-primary  border-2 px-2 py-2 rounde-sm bg-white "
                    onChangeText={(text) => { setPassword(text)}}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
            </View>
            <View className="flex-row justify-between items-center">
                <TouchableOpacity className="bg-primary mt-4 px-6 py-4 rounded-full" onPress={signIn}>
                    <Text className="text-white">
                        SignIn

                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-4" onPress={onSignUpRequest}>
                    <Text className="">
                        Don't have an account ?
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}



export default SignIn;