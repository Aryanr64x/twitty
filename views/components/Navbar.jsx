import React, { useState } from "react";
import { Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import CreateTweetDialog from '../components/CreateTweetDialog'

const Navbar = ({onTweetCreated}) => {
    const [dialog, setDialog] = useState(false)
    return (
        <View className="h-24 bg-primary flex-row justify-between items-center px-4 pt-4">
            <View>
                <Text className="text-white text-3xl">
                    Twitty
                </Text>
            </View>
            <View className="flex-row items-center">
                <MaterialIcons name="account-circle" size={32} color="white" />
                <View className="w-2"></View>
                <TouchableOpacity onPress={() => { setDialog(true) }}>
                    <AntDesign name="pluscircle" size={28} color="white" />
                </TouchableOpacity>
            </View>
            <CreateTweetDialog visible={dialog} onDialogDismiss={()=>{setDialog(false)}} onTweetCreated={onTweetCreated} />
        </View>
    )
}

export default Navbar;