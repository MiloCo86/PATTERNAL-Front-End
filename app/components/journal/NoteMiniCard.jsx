import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

//colors and helper functions
import colors from '../../config/colors';

const NoteMiniCard = ({note}) => {
  return (
    <LinearGradient colors={['#C0E8F9', colors.primary]} style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{note}</Text>
      </View>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: 260,
    minHeight: 130,
    height: 'auto',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    //shadow
    shadowColor: colors.primary,
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  textContainer: {
    padding: 10,
    width: 256,
    minHeight: 126,
    height: 'auto',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {   
    fontSize: 18,
    color: colors.primary,
  }
})

export default NoteMiniCard
