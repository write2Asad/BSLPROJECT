import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/home';
import LoginScreen from '../screens/login';
import RegisterScreen from '../screens/register';
import {Profile} from '../screens/profile';
import QuizScreen from '../screens/quiz';

import WordReviewScreen from '../screens/wordReview';


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

const homeScreen = 'Home';
const profileScreen = 'Profile';
const settingsScreen = 'Settings';

const tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen}
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor: '#FF0032', // set header color
            },
            headerTintColor: '#fff', // set text color
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="WordReview" component={WordReviewScreen} />
      </Stack.Navigator>
      {/* <tab.Navigator
      initialRouteName={homeScreen}
      screenOptions={({route}) => ({
        tabBarIcon:({focused, color, size}) => {
          let iconName;
          let rn = route.name;
          if(rn === homeScreen){
            iconName = focused ? 'home' : 'home-outline'
          } else if(rn === profileScreen){
            iconName = focused ? 'list' : 'list-outline'
          } else if(rn === settingsScreen){
            iconName = focused ? 'settings' : 'settings-outline'
          }

          return <Ionicons name={iconName} size={size} color={color}/>
        },
      })}>

        <tab.Screen name={homeScreen} component={HomeScreen}/>

      </tab.Navigator> */}

    </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});

export default Navigation;