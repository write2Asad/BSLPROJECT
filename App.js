import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, Button } from 'react-native';
import Navigation from './src/components/Navigation';



export default function App() {

  return (
      <Navigation />
  );
  
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    paddingTop: 150,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 250,
    height: 250,
  },
  authContainer: {
    paddingTop: 150
  },
  auth: {
    padding: 20,
  }
});
