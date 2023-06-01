import axios from "axios";
import React, { useContext, useState } from "react";
import { TouchableOpacity, View, Text } from 'react-native'
import { Dialog, Portal, Button, TextInput, Snackbar } from "react-native-paper";
import BASE_URL from "../../BASE_URL";

import { authContext } from "../../contexts/AuthContextWrapper";
const CreateTweetDialog = ({ visible, onDialogDismiss, onTweetCreated }) => {

    const [tweetBody, setTweetBody] = useState("")
  
    const auth = useContext(authContext)
    const createTweet = async () => {
        if (tweetBody != "") {
            const resp = await axios.post(BASE_URL + '/tweet', { tweetBody }, {
                headers: {
                    Authorization: "Bearer " + auth.token

                }
            })
            onTweetCreated(resp.data)
            setTweetBody("")
            onDialogDismiss()
        }
    }
    return (
      
            <Portal>
                <Dialog className="bg-white" visible={visible} onDismiss={() => { }}>
                    <Dialog.Title>Tweet Something</Dialog.Title>
                    <Dialog.Content>
                        <View>
                            <View className="mt-4">

                                <TextInput
                                    multiline={true}
                                    numberOfLines={4}
                                    className="border-primary border-2  mt-4 rounded-sm bg-white "
                                    onChangeText={(text) => { setTweetBody(text) }}
                                    placeholder="Whats going on your mind..."
                                />

                            </View>

                        </View>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={createTweet} >Tweet</Button>
                        <Button onPress={onDialogDismiss}>Cancel</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
           
    )
}

export default CreateTweetDialog;