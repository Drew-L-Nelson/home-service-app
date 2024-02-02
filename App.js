import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './App/Screens/LoginScreen/Login';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function App() {
  return (
    <ClerkProvider publishableKey='pk_test_aHVtYmxlLW9zdHJpY2gtNDguY2xlcmsuYWNjb3VudHMuZGV2JA'>
      <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
      </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 60,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
