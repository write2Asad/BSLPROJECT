import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { authentication } from '../../firebase';

const LoginScreen = ({ navigation }) => {


  const [isSignedIn, setIsSignedIn] = useState(false)

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleLogin = () =>{
    signInWithEmailAndPassword(authentication, email, password)
    .then((userCredentials) => {

      setIsSignedIn(true);
      navigation.navigate('Home');
    })
    .catch(error => alert(error.message))
  }

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

   
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.wrapper}>
          <TextInput
            style={styles.input}
            value={email}
            placeholder='Enter Email'
            onChangeText={(text => setEmail(text))}
          />

          <TextInput
            style={styles.input}
            value={password}
            placeholder='Enter Password'
            onChangeText={(text => setPassword(text))}
            secureTextEntry
          />

          <Button
            color="#6D67E4"
            title='Login'
            onPress={handleLogin}
          />

          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate("Register") }}>
              <Text style={styles.link} >Register</Text>
            </TouchableOpacity>
          </View>
        </View>
        </KeyboardAvoidingView>

    </ImageBackground>


  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  wrapper: {
    width: '80%'
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#bbb',
    paddingHorizontal: 14,
    height: 44,
    backgroundColor: '#e8e8e8'
  },
  link: {
    color: 'blue'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  logoContainer: {
    paddingTop: 100,
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

export default LoginScreen;