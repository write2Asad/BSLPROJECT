import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

const WordReviewScreen = ({ navigation }) => {
  return (
    <ImageBackground source={require('../../assets/bg.png')} style={styles.background}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('WordDetails', { word: 'apple' })}
          >
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Apple</Card.Title>
              <Card.Divider />
              <Card.Image
                source={require('../../assets/apple.png')}
                style={styles.cardImage}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('WordDetails', { word: 'banana' })}
          >
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Banana</Card.Title>
              <Card.Divider />
              <Card.Image
                source={require('../../assets/banana.png')}
                style={styles.cardImage}
              />
            </Card>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cardContainer}
            onPress={() => navigation.navigate('WordDetails', { word: 'cat' })}
          >
            <Card containerStyle={styles.card}>
              <Card.Title style={styles.cardTitle}>Cat</Card.Title>
              <Card.Divider />
              <Card.Image
                source={require('../../assets/cat.png')}
                style={styles.cardImage}
              />
            </Card>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({

  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  cardContainer: {
    marginBottom: 20,
  },
  card: {
    padding: 0,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingVertical: 10,
  },
  cardImage: {
    height: 200,
    resizeMode: 'cover',
  },
});

export default WordReviewScreen;
