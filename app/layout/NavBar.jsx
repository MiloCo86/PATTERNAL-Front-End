import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'

//router
import { router, useLocalSearchParams } from 'expo-router'

//colors and helper functions
import colors from '../config/colors';

// icon libraries
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const NavBar = () => {

  const { userId } = useLocalSearchParams();
  console.log('Received userId in navBar', userId);


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
  const handleNotes = () => {
    return router.push({
      pathname: '/screens/AllNotes',
      params: { userId: userId }
    })
  }
  const handleForum = () => {
    return router.push({
      pathname: '/screens/AllForums',
      params: { userId: userId }
    })
  }

  return (
    <View style={styles.navBar}>

      <Pressable onPress={handleIAChat}>
        {/* <Image source={require('../assets/figma_icons/PATTERNAL_AIchat-icon.png')} style={styles.icon} /> */}
        <MaterialIcons name="add-comment" size={40} color={colors.secondary} style={styles.icon} />
      </Pressable>

      <Pressable onPress={handleMeditation}>
        {/* <Image source={require('../assets/figma_icons/PATTERNAL_Meditation-icon.png')} style={styles.icon} /> */}
        <MaterialIcons name="timelapse" size={42} color={colors.secondary}  style={styles.icon}/>
      </Pressable>

      <Pressable onPress={handleHome}>
        {/* <Image source={require('../assets/figma_icons/PATTERNAL_Home-icon.png')} style={styles.homeIcon} /> */}
        <MaterialCommunityIcons name="home" size={50} color="white" style={styles.homeIcon} />
      </Pressable>

      <Pressable onPress={handleNotes}>
        {/* <Image source={require('../assets/figma_icons/PATTERNAL_Notes-icon.png')} style={styles.icon} /> */}
        <MaterialCommunityIcons name="text-box" size={40} color={colors.secondary} style={styles.icon} />
      </Pressable >

      <Pressable onPress={handleForum}>
        {/* <Image source={require('../assets/figma_icons/PATTERNAL_Discover-icon.png')} style={styles.icon} /> */}
        <MaterialIcons name="forum" size={44} color={colors.secondary} style={styles.icon}/> 
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
        height: '12%',
    },
    icon: {
      marginTop: -20,
      width: 44,
      height: 44,
    },
    homeIcon: {
      marginTop: -20,
      width: 50,
      height: 50,
    },
    
});

export default NavBar;
