import React, { useContext, useEffect, useState } from "react";
import { FlatList, SafeAreaView, Text, ToastAndroid, View } from 'react-native'
import { authContext } from "../../contexts/AuthContextWrapper";
import Navbar from "../components/Navbar";
import axios from "axios";
import BASE_URL from "../../BASE_URL";
import SingleTweet from "../components/SingleTweet";
const HomeScreen = () => {
    const auth = useContext(authContext)
    const [loading, setLoading] = useState(true)
    const [tweets, setTweets] = useState([])

    useEffect(() => {
        getPosts();
    }, [])

    const getPosts = async () => {
        const resp = await axios.get(BASE_URL + '/tweet')
        setLoading(false)
        setTweets(resp.data)
    }


    const onTweetCreated = (tweet) => {
        let newtweet = { ...tweet, creator: { username: auth.authUser.username } }
        ToastAndroid.show('Your tweet has been created !', ToastAndroid.LONG);
        setTweets([newtweet, ...tweets])
    }

    return (
        <SafeAreaView>
            <View>
                <Navbar onTweetCreated={onTweetCreated} />
                {
                    (loading) ? (<Text>Loading</Text>) : ((tweets.length == 0) ? (<Text>No Tweets</Text>) : (
                        <FlatList

                            data={tweets}
                            renderItem={({ item }) => <SingleTweet tweet={item} />}
                            keyExtractor={(item) => item.id}
                        />
                    ))
                }

            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;