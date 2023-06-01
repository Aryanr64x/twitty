import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { authContext } from "../../contexts/AuthContextWrapper";
const SignUp = ({ onSignUp, onSignInRequest }) => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRepeat, setPasswordRepeat] = useState("")
    const auth = useContext(authContext)

    const signUp = async () => {
        if (username!="" && email !== "" && password != "" && passwordRepeat != "") {
            if (password == passwordRepeat) {
                const isSuccess = await auth.signUp(username,email, password, passwordRepeat);
                if (isSuccess) {
                    onSignUp();
                }
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
                    Username:
                </Text>
                <TextInput
                    className="border-primary border-2 px-2 py-2 rounded-sm bg-white "
                    onChangeText={(text) => { setUsername(text) }}
                    placeholder="Create an username...."
                />

            </View>
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
                    onChangeText={(text) => { setPassword(text) }}
                    placeholder="Enter your password"
                    secureTextEntry={true}
                />
            </View>
            <View className="mt-4">
                <Text className="text-xl">
                    Password Repeat:
                </Text>
                <TextInput
                    className="border-primary  border-2 px-2 py-2 rounde-sm bg-white "
                    onChangeText={(text) => { setPasswordRepeat(text) }}
                    placeholder="Enter your password AGAIN"
                    secureTextEntry={true}
                />
            </View>
            <View className="flex-row justify-between items-center">
                <TouchableOpacity className="bg-primary mt-4 px-6 py-4 rounded-full" onPress={signUp}>
                    <Text className="text-white">
                        SignUp

                    </Text>
                </TouchableOpacity>
                <TouchableOpacity className="mt-4" onPress={onSignInRequest}>
                    <Text className="">
                      Already have an account ?
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
    )
}
export default SignUp;