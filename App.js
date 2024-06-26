import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import * as SecureStore from 'expo-secure-store';
import { useFonts } from 'expo-font';
import TabNavigation from './App/Navigations/TabNavigation';
import { useEffect, useState } from 'react';

// const tokenCache = {
//   async getToken(key) {
//     try {
//       return SecureStore.getItemAsync(key);
//     } catch (err) {
//       return null;
//     }
//   },
//   async saveToken(key, value) {
//     try {
//       return SecureStore.setItemAsync(key, value);
//     } catch (err) {
//       return;
//     }
//   },
// };

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });

  const [user, setUser] = useState(null);

  return (
    <ClerkProvider 
      // tokenCache={tokenCache}
      publishableKey='pk_test_aHVtYmxlLW9zdHJpY2gtNDguY2xlcmsuYWNjb3VudHMuZGV2JA'
      >
      <View style={styles.container}>
        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        
        <SignedOut>
          <Login />
        </SignedOut>
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>

//     <ClerkProvider
//   publishableKey='pk_test_aHVtYmxlLW9zdHJpY2gtNDguY2xlcmsuYWNjb3VudHMuZGV2JA'
// >
//     <NavigationContainer>
//       <TabNavigation />
//     </NavigationContainer>
// </ClerkProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
  },
});