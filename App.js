import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import WelcomeScreen from './views/WelcomeScreen';
import AuthScreen from './views/screens/AuthScreen';

const Stack = createNativeStackNavigator();

import { NativeWindStyleSheet } from "nativewind";
import AuthContextWrapper from './contexts/AuthContextWrapper';
import HomeScreen from './views/screens/HomeScreen';

NativeWindStyleSheet.setOutput({
  default: "native",
});



export default function App() {
  return (

    <PaperProvider>
      <AuthContextWrapper>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="welcome" component={WelcomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name="auth" component={AuthScreen} options={{ headerShown: false }} />
            <Stack.Screen name="home" component={HomeScreen} options={{ headerShown: false }} />

          </Stack.Navigator>
        </NavigationContainer>
      </AuthContextWrapper>

    </PaperProvider>
  );
}

