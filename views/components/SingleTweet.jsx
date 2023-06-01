import { View, Text } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';

const SingleTweet = ({ tweet }) => {
    return (
        <View className="mb-2 border-b-2 bg-white border-primary p-2">
            <View className="flex-row justify-between items-center">
                <Text className="text-xl font-semibold">
                    {tweet.creator.username}
                </Text>
                <Text>
                    {tweet.created_at}
                </Text>
            </View>
            <View className="mt-2">
                <Text className="text-lg">
                    {tweet.body}
                </Text>
            </View>
            <View className="flex-row mt-4">
                <View className="flex-1 items-center">
                    <AntDesign name="hearto" size={24} color="black" />
                </View>
                <View className="flex-1 items-center">
                    <EvilIcons name="comment" size={32} color="black" />
                </View>
                <View className="flex-1 items-center">
                    <AntDesign name="retweet" size={24} color="black" />
                </View>
            </View>
        </View>
    )
}

export default SingleTweet;