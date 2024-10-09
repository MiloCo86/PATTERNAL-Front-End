import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ContentCardHome from '../components/TipOfTheDay';
import colors from '../config/colors';

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../assets/logos/Artboard-1.png')} style={styles.logo} />
        <Text style={styles.placeholder}>WELCOME</Text>
        <ContentCardHome />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    marginTop: 16,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 16, // Optional: Add some padding to the container
  },
  placeholder: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 8, // Add some space between the placeholder and the content card
    fontWeight: '500',
    marginTop: -16,

  },
});

export default Home;