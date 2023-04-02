import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { MaterialIcons } from '@expo/vector-icons';
import { Card } from 'react-native-elements';
import { Searchbar } from 'react-native-paper';
const HomeScreen = ({ navigation }) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);


  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.container}>
        <Video
          ref={video}
          style={styles.video}
          source={require('../../assets/BSLIntro.mp4')}
          useNativeControls
          resizeMode="contain"
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />

        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          >
            <Text style={styles.buttonText}>
              {status.isPlaying ? 'Pause' : 'Play'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>

        <TouchableOpacity
          style={[styles.card, { height: 200, width: 200 }]}
          onPress={() => navigation.navigate('Quiz')}
        >
          <Card containerStyle={[styles.cardInside, { flex: 1,}]}>
            <Card.Title style={styles.text}>Quiz Time?</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require('../../assets/quiz.png')}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.card, { height: 200, width: 200 }]}
          onPress={() => navigation.navigate('WordReview')}
        >
          <Card containerStyle={[styles.cardInside, { flex: 1,}]}>
            <Card.Title style={styles.text}>Quiz Time?</Card.Title>
            <Card.Divider />
            <Card.Image
              source={require('../../assets/review.png')}
              style={styles.image}
            />
          </Card>
        </TouchableOpacity>

      </View>
      <View
        style={styles.search}
      >
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  video: {

    height: 200,
    width: '100%',
    padding: 20

  },

  container: {
    padding: 20
  },


  buttonContainer: {
    alignSelf: 'center',
    width: 200,
    height: 40,
    backgroundColor: '#FF8400',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  card: {
    alignSelf: 'center',
    flexDirection: 'row',
    width: '45%',
    margin: 10,
  },
  cardInside:{
    borderRadius: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 1,
  },
  card: {
    width: '40%',
    borderRadius: 10,
    padding: 5,
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  image: {
    height: '70%',
    width: '100%',
  },
  search: {
    padding: 20,
    paddingTop: 40
  }
});

export default HomeScreen;