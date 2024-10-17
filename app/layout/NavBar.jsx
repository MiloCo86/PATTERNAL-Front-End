import React from 'react'

import { View, StyleSheet, Image, Pressable } from 'react-native'

import { useLocalSearchParams } from 'expo-router'

import { router } from 'expo-router'

import colors from '../config/colors';


const NavBar = () => {

  const { userId } = useLocalSearchParams();
  console.log('Received userId:', userId);


  const handleIAChat = () => {
    return router.push({
      pathname: '/screens/IAChat',
      params: { userId: userId }
    })
  }
  const handleMeditation = () => {
    return router.push({
      pathname: '/screens/Meditation',
      params: { userId: userId }
    })
  }
  const handleHome = () => {
    return router.push({
      pathname: '/screens/Home',
      params: { userId: userId }
    })
  }
  const handleJounal = () => {
    return router.push({
      pathname: '/screens/AllJournals',
      params: { userId: userId }
    })
  }
  const handleResources = () => {
    return router.push({
      pathname: '/screens/Forum',
      params: { userId: userId }
    })
  }

  return (
    <View style={styles.navBar}>

      <Pressable onPress={handleIAChat}>
        <Image source={require('../assets/figma_icons/PATTERNAL_AIchat-icon.png')} style={styles.icon} />
      </Pressable>

      <Pressable onPress={handleMeditation}>
        <Image source={require('../assets/figma_icons/PATTERNAL_Meditation-icon.png')} style={styles.icon} />
      </Pressable>

      <Pressable onPress={handleHome}>
        <Image source={require('../assets/figma_icons/PATTERNAL_Home-icon.png')} style={styles.homeIcon} />
      </Pressable>

      <Pressable onPress={handleJounal}>
        <Image source={require('../assets/figma_icons/PATTERNAL_Notes-icon.png')} style={styles.icon} />
      </Pressable >

      <Pressable onPress={handleResources}>
        <Image source={require('../assets/figma_icons/PATTERNAL_Discover-icon.png')} style={styles.icon} /> 
      </Pressable>

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
