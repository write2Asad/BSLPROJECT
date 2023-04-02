import React, { useState } from 'react';

import { StyleSheet, Text, View, ImageBackground, Image, Button, TextInput, TouchableOpacity } from 'react-native';
import { authentication } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const RegisterScreen = ({navigation}) => {


  // const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSignUP = () =>{
    createUserWithEmailAndPassword(authentication, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      navigation.navigate('Login');
    })
    .catch(error => alert(error.message))
  }

  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>

      <View style={styles.logoContainer}>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
      </View>

        <View style={styles.container}>
          <View style={styles.wrapper}>
          {/* <TextInput 
            style={styles.input} 
            value={name}
            placeholder='Enter Name'
            onChangeText={(text => setName(text))}
            /> */}

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
            title='Register' 
            onPress={handleSignUP}
            />

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
              <Text>Already have an account? </Text>
              <TouchableOpacity 
              onPress={() => { navigation.navigate("Login") }}
              >
                <Text style={styles.link} >Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop:50,
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

export default RegisterScreen;