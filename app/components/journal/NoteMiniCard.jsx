import React from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';

//colors and helper functions
import colors from '../../config/colors';

const NoteMiniCard = ({note}) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{note}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    width: 290,
    minHeight: 130,
    height: 'auto',
    padding: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    borderRadius: 10,
    shadowColor: colors.primary,
    shadowOffset: {width: 3, height: 4},
    shadowOpacity: 0.3,
  },
  textContainer: {
    padding: 15,
    width: 286,
    minHeight: 126,
    height: 'auto',
    justifyContent: 'flex-start',
    borderRadius: 10,
    backgroundColor: colors.altBackground,
  },
  text: {   
    fontSize: 18,
    color: colors.primary,
  }
})

export default NoteMiniCard
