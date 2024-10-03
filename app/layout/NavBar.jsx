import React from 'react'

import { View, StyleSheet, Image, Pressable } from 'react-native'

import { router } from 'expo-router'

import colors from '../config/colors';


const NavBar = () => {
  const handleIAChat = () => {
    return router.push('/screens/Login')
  }
  return (
    <View style={styles.navBar}>
      <Pressable onPress={handleIAChat}>
        <Image source={require('../assets/figma_icons/PATTERNAL_AIchat-icon.png')} style={styles.icon} />
      </Pressable>
      
      <Image source={require('../assets/figma_icons/PATTERNAL_Meditation-icon.png')} style={styles.icon} />
      <Image source={require('../assets/figma_icons/PATTERNAL_Home-icon.png')} style={styles.homeIcon} />
      <Image source={require('../assets/figma_icons/PATTERNAL_Notes-icon.png')} style={styles.icon} />
      <Image source={require('../assets/figma_icons/PATTERNAL_Discover-icon.png')} style={styles.icon} />
    </View>
  )
}

const styles = StyleSheet.create({
    navBar: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primary,
        width: '100%',
        height: '10%'
    },
    icon: {
      marginTop: -20,
      width: 30,
      height: 30
    },
    homeIcon: {
      marginTop: -20,
      width: 50,
      height: 50
    },
    
});

export default NavBar;
